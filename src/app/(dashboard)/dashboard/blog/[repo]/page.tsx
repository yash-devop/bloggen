import DeleteButton from "@/app/components/ClientDeleteBlogButton";
import ClientSideLogoutButton from "@/app/components/ClientLogoutButton";
import { Button } from "@/app/components/ui/button";
import prisma from "@/app/lib/prisma";
import { encodeRepoName } from "@/app/utils/modifyRepo";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ExternalLink } from "lucide-react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{
    repo: string;
  }>;
}) {
  try {
    // Validate `params` input
    const repoId = (await params)?.repo;
    console.log("repoId:", repoId);
    if (!repoId) {
      notFound();
      // throw new Error("Invalid repository id.");
    }

    // Fetch the blog entry from the database
    const existingRepo = await prisma.blog.findFirst({
      where: {
        id: repoId,
      },
    });

    console.log("exisiting: ", existingRepo);

    // Handle non-existent repositories
    if (!existingRepo) {
      redirect("/dashboard"); // Redirect if blog not found
    }

    const { repoName } = existingRepo;

    const encodedrepo = encodeRepoName(repoName);

    const BASE_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN as string;
    const blogURL =
      process.env.NODE_ENV === "production"
        ? `https://${encodedrepo}.bloggen.${BASE_DOMAIN}`
        : `http://${encodedrepo}.bloggen.localhost:3000`;

    console.log("blogURL", blogURL);
    return (
      <>
        <div className="w-full min-h-screen h-full flex flex-col justify-center items-center px-4 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center h-full flex-grow">
            <BlogCard blogURL={blogURL} {...existingRepo} />
          </div>
          <ClientSideLogoutButton className="rounded-md absolute bottom-2" />
        </div>
      </>
    );
  } catch (e) {
    const error = e as Error;
    console.error("Error in BlogPage:", error);

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-500 text-lg font-bold">An error occurred</h1>
        <p className="text-gray-600">
          {error.message || "Something went wrong. Please try again later."}
        </p>
        <Link href="/dashboard">
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Go to Dashboard
          </button>
        </Link>
      </div>
    );
  }
}

const BlogCard = async ({
  blogURL,
  blogName,
  createdAt,
  owner,
  repoName,
  updatedAt,
}: {
  id: string;
  blogURL: string;
  blogName: string;
  repoName: string;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}) => {
  return (
    <div className="h-fit max-w-[95%] sm:max-w-[400px] lg:min-w-[500px] border border-neutral-300 rounded-xl absolute bg-[#ffffff44] flex flex-col p-6 shadow-2xl z-10">
      <div className="flex flex-col min-h-full justify-between space-y-4 pt-2 flex-grows w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold pb-2 text-black capitalize">{blogName}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2">
              <p className="text-sm text-muted-foreground">
                Repository: {repoName}
              </p>
              <p className="text-sm">Owner: {owner}</p>
              <p className="text-sm">
                Created: {createdAt.toLocaleString()}
              </p>
              <p className="text-sm">
                Updated: {updatedAt.toLocaleString()}
              </p>
          </div>
        </div>
        <div className="py-4 flex flex-col lg:flex-row justify-between gap-3">
          <Link href={blogURL} className="w-full">
            <Button variant="default" className="w-full rounded-lg">
              <ExternalLink className="w-4 h-4 mr-2" />
              <span>Visit Blog</span>
            </Button>
          </Link>
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};
