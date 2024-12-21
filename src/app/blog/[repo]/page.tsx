import githubClient from "@/app/lib/octokit";
import prisma from "@/app/lib/prisma";
import { notFound } from "next/navigation";


// User Facing Blog Page  ( for everyone ) =>

export default async function UserBlog({
  params,
}: {
  params: Promise<{
    repo: string;
  }>;
}) {
  const repoId = (await params).repo;
  console.log("params: ", await params);
  console.log("repoName:", repoId);
  const blog = await prisma.blog.findFirst({
    where: {
      repoName: repoId,
    },
  });

  if(!blog){
    // error.
    notFound()
  }

  console.log("BLOG OWNER: ", blog?.owner);
  const owner = await prisma.owner.findFirst({
    where: {
      owner: blog?.owner
    }
  });

  console.log('Owner :',owner);

  if(!owner){
    // error.
    notFound()
  }

  const {installationId} = owner

  console.log("installationId:", installationId , typeof(installationId));
  const octokit = await githubClient.getInstallationOctokit(
    Number(installationId!)
  );
  return (
    <>
      <p>{repoId}</p>
      <p>Blog page working. with Github INSTALLATION ID : {installationId}</p>
      {JSON.stringify(blog)}
      {/* <p>Blog page working. {JSON.stringify(data)}</p> */}
    </>
  );
}









// import githubClient from "@/app/lib/octokit";
// import prisma from "@/app/lib/prisma";
// import { notFound } from "next/navigation";

// export default async function UserBlog({
//   params,
// }: {
//   params: Promise<{
//     repo: string;
//   }>;
// }) {
//   // const data = await prisma.blog.findMany()
//   const repoName = (await params).repo;
//   console.log("params: ", await params);
//   console.log("repoName:", repoName);
//   const blog = await prisma.blog.findFirst({
//     where: {
//       repoName,
//     },
//   });

//   console.log("BLOG: ", blog);
//   const owner = await prisma.owner.findFirst({
//     where: {
//       repo: repoName,
//     },
//   });

//   if(!owner){
//     // error.
//     notFound()
//   }

//   const {installationId} = owner

//   console.log("installationId:", installationId , typeof(installationId));
//   const octokit = await githubClient.getInstallationOctokit(
//     Number(installationId!)
//   );
//   return (
//     <>
//       <p>{repoName}</p>
//       <p>Blog page working.</p>
//       {JSON.stringify(blog)}
//       {/* <p>Blog page working. {JSON.stringify(data)}</p> */}
//     </>
//   );
// }
