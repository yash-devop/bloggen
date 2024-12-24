import DeleteButton from "@/app/components/ClientDeleteBlogButton";
import prisma from "@/app/lib/prisma";
import { encodeRepoName } from "@/app/utils/modifyRepo";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

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
    console.log('repoId:',repoId);
    if (!repoId) {
      notFound()
      // throw new Error("Invalid repository id.");
    }

    // Fetch the blog entry from the database
    const existingRepo = await prisma.blog.findFirst({
      where: {
        id: repoId,
      },
    });

    console.log('exisiting: ', existingRepo);

    // Handle non-existent repositories
    if (!existingRepo) {
      redirect("/dashboard"); // Redirect if blog not found
    }

    const {repoName} = existingRepo

    const encodedrepo = encodeRepoName(repoName)

    // Construct blog URL
    const BASE_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN as string;
    const blogURL = process.env.NODE_ENV === "production" ? `http://${encodedrepo}.${BASE_DOMAIN}.com` : `http://${encodedrepo}.${BASE_DOMAIN}`

    console.log('blogURL',blogURL);
    // Render the page
    return (
      <>
        <p>
          Blog {repoName} ENCODED === {encodedrepo}: {JSON.stringify(existingRepo)}
        </p>

        <Link href={blogURL}>
          <button className="bg-blue-300 p-6">Visit</button>
        </Link>
        <DeleteButton />
      </>
    );
  } catch (e) {
    const error = e as Error
    console.error("Error in BlogPage:", error);

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-500 text-lg font-bold">An error occurred</h1>
        <p className="text-gray-600">{error.message || "Something went wrong. Please try again later."}</p>
        <Link href="/dashboard">
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Go to Dashboard
          </button>
        </Link>
      </div>
    );
  }
}


// import prisma from "@/app/lib/prisma";
// import Link from "next/link";
// import { redirect } from "next/navigation";

// export default async function BlogPage({
//   params,
// }: {
//   params: Promise<{
//     repo: string;
//   }>;
// }) {
//   try {
//     // Validate `params` input
//     const repoName = (await params)?.repo;
//     if (!repoName) {
//       throw new Error("Invalid repository name.");
//     }

//     // Fetch the blog entry from the database
//     const existingRepo = await prisma.blog.findFirst({
//       where: {
//         repoName: repoName,
//       },
//     });

//     // Handle non-existent repositories
//     if (!existingRepo) {
//       redirect("/dashboard"); // Redirect if blog not found
//     }

//     // Construct blog URL
//     const BASE_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN as string;
//     const blogURL = process.env.NODE_ENV === "production" ? `http://${repoName}.blog.${BASE_DOMAIN}.com` : `http://${repoName}.blog.${BASE_DOMAIN}`

//     console.log('blogURL',blogURL);
//     // Render the page
//     return (
//       <>
//         <p>
//           Blog {repoName}: {JSON.stringify(existingRepo)}
//         </p>

//         <Link href={blogURL}>
//           <button className="bg-red-400">Visit</button>
//         </Link>
//       </>
//     );
//   } catch (error: any) {
//     console.error("Error in BlogPage:", error);

//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h1 className="text-red-500 text-lg font-bold">An error occurred</h1>
//         <p className="text-gray-600">{error.message || "Something went wrong. Please try again later."}</p>
//         <Link href="/dashboard">
//           <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
//             Go to Dashboard
//           </button>
//         </Link>
//       </div>
//     );
//   }
// }
