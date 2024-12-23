"use server";
import prisma from "@/app/lib/prisma";

export type State =
  | { status: "success"; message: string }
  | {
      status: "error";
      message: string;
      errors?: { name: string; message: string };
    }
  | null;
export async function deleteBlogPage(blogId: string): Promise<State> {
  try {
    await prisma.blog.delete({
      where: {
        id: blogId,
      },
    });
    // if(deleted){
    //     revalidatePath("/dashboard")
    //     // redirect("/dashboard",RedirectType.push)
    // }
    return {
      status: "success",
      message: "Blog deleted successfully.",
    };
  } catch (e) {
    const error = e as Error;
    console.log("error in delete-blog action:", error);
    return {
      status: "error",
      message: "Error in deleting the blog.",
      errors: {
        name: error.name,
        message: error.message,
      },
    };
  }
}
