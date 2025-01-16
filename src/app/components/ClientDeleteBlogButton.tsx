"use client";
import { deleteBlogPage } from "@/actions/delete-blog";
import { useParams, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";

export default function DeleteButton() {
  const { repo } = useParams();
  const repoId = repo as string;
  const router = useRouter();
  const [isSubmitting , setIsSubmitting ] = useState(false)

  const handleDelete = async () => {
    try {
      setIsSubmitting(true)
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
      <Button onClick={handleDelete} disabled={isSubmitting} className="bg-destructive rounded-lg disabled:bg-primary/50">
        Delete Blog
      </Button>
    </>
  );
}
