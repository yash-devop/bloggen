"use server";

import prisma from "@/app/lib/prisma";
import { auth } from "@/app/utils/auth";
import { redirect } from "next/navigation";

// Server action to handle form submission

export type State =
  | { status: "success"; message: string; redirectUrl: string }
  | {
      status: "error";
      message: string;
      errors?: { path: string; message: string }[];
    }
  | null;
type Blog = {
  blogName: string;
  repoName: string;
};
export async function createRepo(
  previousState: State | null,
  formData: FormData
): Promise<State> {
  const blogNameTrimmed = formData.get("blogName")?.toString().toLowerCase()!
  const repoNameTrimmed = formData.get("repoName")?.toString().toLowerCase().replace(/\./g, "-").trim()!


  console.log("Mutation :", {blogNameTrimmed,repoNameTrimmed});
  const session = await auth();
  try {
    const existing_blog = await prisma.blog.findFirst({
      where: {
        repoName: repoNameTrimmed,
      },
    });

    console.log("existing: ", existing_blog);
    if (!existing_blog) {
      const new_blog = await prisma.blog.create({
        data: {
          blogName: blogNameTrimmed,
          repoName: repoNameTrimmed,
          owner:  session?.user.username!
        },
      });
      // await prisma.owner.update({
      //   data:{
      //     repo: repoNameTrimmed
      //   },
      //   where:{
      //     owner: session?.user.username
      //   }
      // })
      return {
        status: "success",
        message: "Blog created bro.",
        redirectUrl: `/dashboard/blog/${new_blog.id}`,      // redirect to that blog using id.
      };
    }
    return {
      status: "error",
      message: "Selected Repository already has a blog.",
    };
  } catch (e) {
    console.log("Error: ", e);
    return {
      status: "error",
      message: "Something went wronge while creating this blog , Please try later."
    };
  }
}
