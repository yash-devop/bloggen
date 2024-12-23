"use client";

import { createRepo } from "@/actions/create-repo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useRouter } from "next/navigation";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
export default function CreateBlogForm({ repos }: { repos: string[] }) {
  const [state, formAction , pending] = useActionState(createRepo,null);         // form actions.
  console.log("pending:", pending);
  console.log("state:", state);

  const router = useRouter();

  useEffect(() => {
    if (!state) {
      return; // Avoid running the logic if `state` is undefined/null
    }
  
    console.log("UseEffect running with state:", state);
  
    // Show a toast based on the state
    if (state.status === "error") {
      toast.error(state.message); // Show error toast
    } else if (state.status === "success") {
      toast.success(state.message); // Show success toast
      router.push(state.redirectUrl)
    }
  }, [state , router]);
  return (
    <>
      {/* Form */}
      <form action={formAction} className="space-y-4">
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
              {repos.map((name) => (
                <SelectItem value={name} key={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <button
          type="submit"
          disabled={pending}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-red-400"
        >
          Create
        </button>
      </form>
    </>
  );
}
