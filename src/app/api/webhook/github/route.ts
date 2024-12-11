// pages/api/webhook/github.js
import githubClient from "@/app/lib/octokit";
import { NextRequest, NextResponse } from "next/server";

// export const config = {
//   api: {
//     bodyParser: false, // Disable Next.js body parsing for raw JSON access
//   },
// };

githubClient.webhooks.on("installation.created", async ({ payload }) => {
  console.log("payload of installation:", payload);
//   return NextResponse.redirect("/dashboard/success", { status: 302 });
});
githubClient.webhooks.on("issues", async ({ payload }) => {
  console.log("payload of issues:", payload);
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.text(); // Read the request body as a string
    console.log("raw body for this request is:", body);

    console.log('headers: ' , req.headers);
    await githubClient.webhooks.verifyAndReceive({
      id: req.headers.get("x-github-delivery") as string, // Unique event ID from GitHub
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
  } catch (error) {
    console.log("error in app install: ", error);
    return NextResponse.json({
      message: "Error while installing app in your repository",
      error,
    });
  }
};



// import githubClient from "@/app/lib/octokit"
// import { NextRequest, NextResponse } from "next/server"

// export const config = {
//     api: {
//       bodyParser: false, // Disable Next.js body parsing for raw JSON access
//     },
//   };

// export const POST=async(req:NextRequest)=>{
//     try {
//         const eventType = req.headers.get("X-GitHub-Event"); // Get event type from header
//         const rawBody = await req.text(); // Read raw request body
//         const body = JSON.parse(rawBody); // Parse JSON payload

//         if (eventType === "installation") {
//           console.log('Payload of installation:', body);
//           const installationId = body.installation.id;
//           const account = body.installation.account;
//           // Further processing based on installation data

//           return NextResponse.redirect("/dashboard/success", { status: 302 });
//         } else if (eventType === "issues") {
//           console.log('Payload of issues:', body);
//           const issue = body.issue; // Assuming the issue object is directly in the payload
//           // Handle issues event

//           return NextResponse.json({ message: "Handled issues event." }, { status: 200 });
//         } else {
//           console.warn(`Unsupported event type: ${eventType}`);
//           return NextResponse.json({ message: "Unsupported event type." }, { status: 400 });
//         }
//       } catch (error) {
//         console.error('Error in app install: ', error);
//         return NextResponse.json({
//           message: "Error while installing app in your repository",
//           error,
//         });
//       }

// }
