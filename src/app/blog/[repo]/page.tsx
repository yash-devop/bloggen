import NeutralList from "@/app/components/themes/Neutral/NeutralList";
import SaharaList from "@/app/components/themes/Sahara/SaharaList";
import githubClient from "@/app/lib/octokit";
import prisma from "@/app/lib/prisma";
import { getTheme } from "@/app/utils/getTheme";
import { decodeRepoName } from "@/app/utils/modifyRepo";
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
  const theme = await getTheme()
  const repoName = decodeRepoName(repoId)
  const blog = await prisma.blog.findFirst({
    where: {
      repoName,
    },
  });

  if (!blog) {
    // error.
    notFound();
  }

  const owner = await prisma.owner.findFirst({
    where: {
      owner: blog?.owner,
    },
  });


  if (!owner) {
    // error.
    notFound();
  }

  const { installationId } = owner;

  console.log("installationId:", installationId, typeof installationId);
  const octokit = await githubClient.getInstallationOctokit(
    Number(installationId!)
  );

  try {
    const issues = await octokit.rest.issues.listForRepo({
      owner: owner.owner,
      repo: blog.repoName || repoId
    })
  
    const ListComponent = theme === "neutral" ? NeutralList : SaharaList;
  
    return (
      <>
          <ListComponent blogData={issues.data} />
      </>
    );
  } catch (error) {
    console.log('error',error);
    notFound()
  }

}