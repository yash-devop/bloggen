import { notFound } from "next/navigation";
import githubClient from "../../../lib/octokit";
import prisma from "../../../lib/prisma";
import { auth } from "../../../utils/auth";
import CreateBlogForm from "@/app/components/CreateBlogForm";
import { fetchUserWithRetry } from "@/app/utils/fetchWithRetry";


export const revalidate = 30;
export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: Promise<{ installation_id?: string }>;
}) {
  const session = await auth();
  let installation_id = (await searchParams)?.installation_id;
  if (!installation_id) {
    const owner = await prisma.owner.findFirst({
      where: {
        owner: session?.user.username,
      },
    });

    if (!owner) {
      notFound();
    }

    installation_id = owner?.installationId;
  }

  const user = await fetchUserWithRetry(installation_id);

  if (!user) {
    return <p className="text-red-500">No user found... please try later.</p>;
  }

  // Fetch GitHub repos
  let repos_names: string[] = [];
  try {
    const octokit = await githubClient.getInstallationOctokit(
      Number(user?.installationId)
    );

    const repos_list = await octokit.rest.repos.listForUser({
      username: user.owner
    });

    repos_names = repos_list.data.map((repo) => repo.name);
  } catch (error) {
    console.error("Error fetching repos:", error);
    return <p className="text-red-500">Failed to fetch repositories.</p>;
  }
  return (
    <>
      {/* <p>Im Dashboard page with installation id: {user?.installationId}</p> */}
      <div className="flex flex-col items-center justify-center w-full min-h-screen max-w-md mx-auto ">
      <p className="text-2xl text-black text-left pb-8 w-full px-4">Create new blog</p>
        <CreateBlogForm repos={repos_names} />
      </div>
    </>
  );
}
