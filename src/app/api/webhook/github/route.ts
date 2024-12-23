import githubClient from "@/app/lib/octokit";
import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

githubClient.webhooks.on("installation.created", async (data) => {
  console.log("INSTALLATION IN POST BLOCK", data.payload);
  const { payload } = data;
  const created = await prisma.owner.create({
    data: {
      installationId: String(payload.installation.id),
      // @ts-ignore
      owner: String(payload.installation.account.login),
    },
  });

  console.log("CREATED : ", created);
});

githubClient.webhooks.on("installation.deleted", async ({ payload }) => {
  console.log("app delete block => ");
  await prisma.owner.delete({
    where: {
      installationId: String(payload.installation.id),
    },
  });
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.text(); // Read the request body as a string
    await githubClient.webhooks.verifyAndReceive({
      id: req.headers.get("x-github-delivery") as string, // Unique event ID from GitHub API
      name: req.headers.get("x-github-event") as any, // Event type (e.g., "push")
      signature: req.headers.get("x-hub-signature-256") as string, // HMAC signature for validation
      payload: body, // Pass the raw body for signature verification
    });
    return NextResponse.json(
      {
        message: "Webhook is verified !!",
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json({
      message: "Error while installing app in your repository",
      error,
    });
  }
};
