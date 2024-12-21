"use client"
import { deleteBlogPage } from "@/actions/delete-blog";
import { useParams, useRouter } from "next/navigation";


export default function DeleteButton(){
    const {repo}= useParams();
    const repoId = repo as string
    const router = useRouter();

    const handleDelete = async () => {
        try {
          // Assuming deleteBlogPage is an async function
          await deleteBlogPage(repoId); // No need to cast `repo` as string
          router.push("/dashboard");
        } catch (error) {
          console.error("Failed to delete blog page:", error);
          // Optionally, you can display an error message to the user here
        }
      };
    return (
        <>
        <button onClick={handleDelete} className="p-5 bg-red-400">DELETE BLOG ?</button>
        </>
    )
}