import NeutralList from "@/app/components/themes/Neutral/NeutralList";
import SaharaList from "@/app/components/themes/Sahara/SaharaList";
import githubClient from "@/app/lib/octokit";
import prisma from "@/app/lib/prisma";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";


// User Facing Blog Page  ( for everyone ) =>

export default async function UserBlog({
  params,
}: {
  params: Promise<{
    repo: string;
  }>;
  searchParams: Promise<{
    theme: "sahara" | "neutral";
  }>;
}) {
  const repoId = (await params).repo;
  const theme = (await headers()).get("x-theme")
  console.log("params: ", await params);
  console.log("query: ", theme);
  console.log("repoName:", repoId);
  const blog = await prisma.blog.findFirst({
    where: {
      repoName: repoId,
    },
  });

  if (!blog) {
    // error.
    notFound();
  }

  console.log("BLOG OWNER: ", blog?.owner);
  const owner = await prisma.owner.findFirst({
    where: {
      owner: blog?.owner,
    },
  });

  console.log("Owner :", owner);

  if (!owner) {
    // error.
    notFound();
  }

  const { installationId } = owner;

  console.log("installationId:", installationId, typeof installationId);
  const octokit = await githubClient.getInstallationOctokit(
    Number(installationId!)
  );

  const issues = await octokit.rest.issues.listForRepo({
    owner: owner.owner,
    repo: blog.repoName || repoId
  })

  // console.log('issues',issues);

  const ListComponent = theme === "neutral" ? NeutralList : SaharaList;

  return (
    <>
        {/* <div className="text-red-400">
          <p>{repoId}</p>
          <p>
            Blog page working. with Github INSTALLATION ID : {installationId}
          </p>
          {JSON.stringify(blog)}
        </div> */}
        <ListComponent blogData={issues.data} />
    </>
  );
}