"use server";

import prisma from "@/app/lib/prisma";
import { auth } from "@/app/utils/auth";

// Server action to handle form submission

export type State =
  | { status: "success"; message: string; redirectUrl: string }
  | {
      status: "error";
      message: string;
      errors?: { path: string; message: string }[];
    }
  | null;

export async function createRepo(
  previousState: State | null,
  formData: FormData
): Promise<State> {
  const blogName = formData.get("blogName")?.toString().toLowerCase().trim();
  const repoName = formData.get("repoName")?.toString().toLowerCase().trim();

  if (!blogName || !repoName) {
    return {
      status: "error",
      message: "Both Blog Name and Repository Name are required.",
    };
  }

  const session = await auth();
  if (!session) {
    return {
      status: "error",
      message: "Please Login.",
    };
  }
  try {
    const existing_blog = await prisma.blog.findFirst({
      where: {
        repoName,
      },
    });

    console.log("existing: ", existing_blog);
    if (!existing_blog) {
      const new_blog = await prisma.blog.create({
        data: {
          blogName,
          repoName,
          owner: session.user.username,
        },
      });
      return {
        status: "success",
        message: "Blog created bro.",
        redirectUrl: `/dashboard/blog/${new_blog.id}`, // redirect to that blog using id.
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
      message:
        "Something went wronge while creating this blog , Please try later.",
    };
  }
}
