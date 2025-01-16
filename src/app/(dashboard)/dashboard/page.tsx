import Dashbar from "@/app/components/dashboard/Dashbar";
import { BlogIcon } from "@/app/components/logos/book";
import prisma from "@/app/lib/prisma";
import { auth } from "@/app/utils/auth";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();
  const blogs = await prisma.blog.findMany({
    where: {
      owner: session?.user.username,
    }
  });
  return (
    <>
      <div className="min-h-screen font-sans flex flex-col">
        <Dashbar />
        <div className="w-full flex-grow flex flex-col px-4">
          <p className="text-xl font-semibold pt-8 pb-5 px-28 font-sans tracking-tight cursor-default select-none">
            My Blogs
          </p>
          <div className="w-full py-4 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl transition-all">
              <Link key={1} href={"/dashboard/new"} className="w-auto h-auto min-h-[200px] border border-neutral-300 rounded-xl border-dashed p-4 flex items-center justify-center gap-2 hover:bg-[#eaeaea] transition-all cursor-pointer select-none">
                <Plus size={16} />
                <span className="tracking-tight">Create blog</span>
              </Link>
              {blogs.map((blog) => (
                <>
                    <BlogCard {...blog} key={blog.id}/>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const BlogCard = ({
  blogName,
  id,
  repoName,
  createdAt
}: {
  owner: string;
  id: string;
  repoName: string;
  blogName: string;
  createdAt: Date
}) => {
  return (
    <div
      className="w-full h-auto min-h-[190px] border rounded-xl p-4 flex flex-col justify-between group relative overflow-hidden"
    >
      <div className="bg-rose-300 h-[6px] w-full md:w-[100px] lg:w-[90px] absolute -top-1 left-1/2 transform -translate-x-1/2 rounded-full" />
      <div className="flex items-center justify-between gap-5">
        <BlogIcon className="stroke-blue-400 text-blue-500 shrink-0 size-[30px]" />
        <p className="font-mono text-neutral-600 truncate font-light text-xs max-w-sm text-right">
          club-dot-sh.bloggen.yashstack.com
        </p>
      </div>
      <Link 
      key={id}
      href={`/dashboard/blog/${id}`} className="flex-grow flex flex-col justify-end">
        <p className="font-sans text-neutral-600 truncate font-light text-sm">{repoName}</p>
        <span className="text-base font-medium text-black  tracking-[-1px]">
          {blogName}
        </span>
        <div className="overflow-x-hidden flex justify-between">
          <p className="group-hover:-translate-x-28 transition-all text-xs tracking-[-0.39px] text-gray-600">
            Created at {createdAt.toLocaleDateString()}
          </p>
          <div className="flex translate-x-20 group-hover:translate-x-0 transition-all items-center gap-2 text-gray-600">
            <p className="text-xs font-[400] tracking-[-0.39px] ">Go to blog</p>
            <ArrowRight size={10} className="mt-0.5" />
          </div>
        </div>
      </Link>
    </div>
  );
};