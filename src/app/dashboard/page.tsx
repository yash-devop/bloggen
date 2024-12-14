import githubClient from "../lib/octokit";
import prisma from "../lib/prisma";
import { auth } from "../utils/auth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: Promise<{ installation_id: string }>;
}) {
  const installation_id = (await searchParams)?.installation_id;
  const session = await auth();

  // Fetch owner details from database
  const owner_details = await prisma.owner.findUnique({
    where: {
      owner: session?.user.username,
    },
  });

  if (!owner_details) {
    return <p className="text-red-500">No user found... please try later.</p>;
  }

  // Fetch GitHub repos
  let repos_names: string[] = [];
  try {
    const octokit = await githubClient.getInstallationOctokit(
      Number(owner_details?.installationId)
    );

    const repos_list = await octokit.rest.repos.listForUser({
      username: owner_details?.owner!,
    });

    repos_names = repos_list.data.map((repo) => repo.name);
  } catch (error) {
    console.error("Error fetching repos:", error);
    return <p className="text-red-500">Failed to fetch repositories.</p>;
  }

  // Server action to handle form submission
  async function createRepo(formData: FormData) {
    "use server";

    const rawFormData = {
      blogName: formData.get("blogName"),
      repoName: formData.get("repoName"),
    };

    console.log("Mutation :", rawFormData);

    // database call.
  }

  return (
    <>
      <p>I'm Dashboard page with installation id: {installation_id}</p>

      {/* Form */}
      <form action={createRepo} className="space-y-4">
        <input
          type="text"
          name="blogName"
          id="blogName"
          placeholder="Blog Name"
          required
          className="border rounded p-2 w-full"
        />
        <div className="mt-6">
        <label className="block mb-2">Select Repository:</label>
        <Select name="repoName">
          <SelectTrigger className="w-[180px] border rounded p-2">
            <SelectValue placeholder="Choose a repository" />
          </SelectTrigger>
          <SelectContent>
            {repos_names.map((name) => (
              <SelectItem value={name} key={name}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </form>

      {/* Dropdown */}
      
    </>
  );
}
