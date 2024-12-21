import { notFound } from "next/navigation";
import githubClient from "../../../lib/octokit";
import prisma from "../../../lib/prisma";
import { auth } from "../../../utils/auth";
import CreateBlogForm from "@/app/components/CreateBlogForm";
export const fetchUserWithRetry = async (installationId: string) => {
  let RETRIES = 1;
  const RETRY_INTERVAL = 400;

  for (let attempt = 0; attempt < RETRIES; attempt++) {
    const user = await prisma.owner.findUnique({
      where: { installationId },
    });

    if (user) {
      return user;
    }

    await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL));
  }

  return null;
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: Promise<{ installation_id: string }>;
}) {
  const session = await auth();
  let installation_id = (await searchParams)?.installation_id;
  if (!installation_id) {
    const owner = await prisma.owner.findFirst({
      where: {
        owner: session?.user.username!,
      },
    });

    if (!owner) {
      notFound();
    }

    installation_id = owner?.installationId!;
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
      username: user?.owner!,
    });

    repos_names = repos_list.data.map((repo) => repo.name);
  } catch (error) {
    console.error("Error fetching repos:", error);
    return <p className="text-red-500">Failed to fetch repositories.</p>;
  }
  return (
    <>
      <p>I'm Dashboard page with installation id: {user?.installationId}</p>

      <CreateBlogForm repos={repos_names} />
    </>
  );
}
