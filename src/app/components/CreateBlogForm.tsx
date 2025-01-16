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
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
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
      <div className="w-full p-3 flex flex-col justify-center">
        <form action={formAction} className="flex-grow h-full flex flex-col justify-center">
          {/* <label className="block mb-2 text-sm px-2">Enter blog name</label> */}
          <Input
            type="text"
            name="blogName"
            id="blogName"
            placeholder="Enter your blog name"
            required
            className="border-neutral-300 focus-visible:border focus-visible:border-red-400 focus-visible:ring-offset-4 focus-visible:ring-transparent focus-visible:ring-offset-rose-200/60"
            // className="border rounded p-2 w-full"
          />
          <div className="mt-6 w-full">
            <Select name="repoName" required>
              <SelectTrigger className="w-full border rounded-md p-2 border-neutral-300">
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
      <p className="text-xs text-neutral-500 text-left w-full max-w-md pt-10 pb-4 px-2">By clicking &apos;Create Blog&apos;, you&apos;ll start the process of setting up your blog and customizing it for your content.</p>

          <Button
            type="submit"
            disabled={pending}
            className="disabled:bg-destructive rounded-md"
            // className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-red-400"
          >
            Create Blog
            <ArrowRight size={5} className="shrink-0"/>
          </Button>
        </form>
      </div>
    </>
  );
}
