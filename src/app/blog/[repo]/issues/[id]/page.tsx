import { notFound } from "next/navigation";
import githubClient from "@/app/lib/octokit";
import { decodeRepoName } from "@/app/utils/modifyRepo";
import prisma from "@/app/lib/prisma";
import MarkdownComponent from "./MarkdownComponent";
import { getTheme } from "@/app/utils/getTheme";
import { Button } from "@/app/components/ui/button";
export default async function IssuePage({
  params,
}: {
  params: Promise<{
    repo: string;
    id: string;
  }>
}) {
  const theme = await getTheme();
  const issueId = (await params).id;
  const repoId = (await params).repo;
  console.log("theme", theme);

  const repoName = decodeRepoName(repoId);
  console.log("reponame", repoName);
  const blog = await prisma.blog.findFirst({
    where: {
      repoName,
    },
  });

  if (!blog) {
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
    notFound();
  }

  const { installationId } = owner;
  const octokit = await githubClient.getInstallationOctokit(
    Number(installationId!)
  );

  try {
    const comments = await octokit.rest.issues.listComments({
      owner: owner.owner,
      repo: blog.repoName || repoId,
      issue_number: Number(issueId),
    });
    //   const ListComponent = theme === "neutral" ? NeutralList : SaharaList;

    console.log('comments',comments);
    return (
      <>
        <div className="flex flex-col">
        <div className="flex justify-between flex-wrap gap-4 pb-16">
          <h1 className={`text-3xl ${
          theme === "sahara" ? "text-black" : "text-white"
        }`}>{repoName}</h1>
          <div className="">
            <Button className={"text-base"}>
                <a target="_blank" href={`https://github.com/${owner.owner}/${repoName}/issues/${issueId}`}>
                Leave a comment ?
                </a>
            </Button>
          </div>
        </div>
          {comments && comments.data.length > 0 ? (
            comments.data.map((comment , idx) => {
              return (
                <>
                  <div className="flex flex-col gap-6">
                    <div className={`w-full border-b border-neutral-700 py-4 ${
          theme === "sahara" ? "text-black" : "text-white"
        }`}>
                        <p>Comment {idx+1}</p>
                    </div>
                    <MarkdownComponent markdown={comment.body!} theme={theme} />
                  </div>
                </>
              );
            })
          ) : (
            <p className="text-center py-10 text-neutral-600">No comments on this issue...wowowowow</p>
          )}
        </div>
      </>
    );
  } catch (error) {
    console.log("error", error);
    notFound();
  }
}
