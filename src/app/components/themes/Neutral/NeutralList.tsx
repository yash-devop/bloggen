import React from "react";
import { Badge } from "@/app/components/ui/badge";
import Link from "next/link";
import { format } from "date-fns";

type NeutralListProps = {
  blogData: {
    id: number;
    created_at: string;
    updated_at: string;
    title: string;
    state: string;
    body?: string | null | undefined;
  }[];
};
export default function NeutralList({ blogData }: NeutralListProps) {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto h-full pt-4  px-4 lg:px-0">
        <p className="text-3xl md:text-4xl py-10">Blog</p>
        <div className="grid grid-cols-[100px_100px_1fr] w-full gap-y-6">
          {blogData.map(({ id, created_at, state, title }) => {
            const date = new Date(created_at);
            const formattedDate = format(date, "dd-MM-yyyy");
            return (
              <React.Fragment key={id}>
                <p className="text-neutral-500 text-base">{formattedDate}</p>
                <Badge
                  variant={"default"}
                  className={`gap-1 w-fit rounded-full ${
                    state
                      ? "bg-green-800/30 text-green-600 border-green-500 hover:bg-green-800/30 cursor-default"
                      : "bg-neutral-800 text-neutral-600 border-neutral-700  hover:bg-neutral-800 cursor-default"
                  }`}
                >
                  <div 
                    className={`${
                      state ? "bg-green-500 animate-pulse" : "bg-neutral-600"
                    } size-2 rounded-full`}
                  />
                  {state ? "open" : "closed"}
                </Badge>
                <Link href={`/issues/${id}`} className="truncate">
                  <span className="text-left  text-neutral-300 underline underline-offset-2 text-base">
                    {title}
                  </span>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
