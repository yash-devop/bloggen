import { format } from "date-fns";
import Link from "next/link";
import React from "react";

type SaharaListProps = {
  blogData: {
    id: number;
    created_at: string;
    updated_at: string;
    title: string;
    state: string;
    body?: string | null | undefined;
  }[];
};

export default function SaharaList({ blogData }: SaharaListProps) {
  return (
    <>
        <p className="text-3xl md:text-4xl py-10 text-[#111111]">Blog</p>
      <div className="grid grid-cols-[120px_1fr] w-full md:gap-y-3 gap-x-3 md:gap-x-5">

        {blogData.map(({ created_at, id, title }) => {
          const date = new Date(created_at);
          const formattedDate = format(date,"dd - MMM - yyyy")
          return (
            <React.Fragment key={id}>
              <div className="flex flex-col gap-2">
                <p className="text-[#ad9567] text-base">{formattedDate}</p>
              </div>
              <Link
                href={`/issues/${id}`}
                className="truncate flex flex-col rounded-lg transition-all duration-300 focus:outline-none"
              >
                <div>
                  <span className="text-left text-[#695b3d] underline underline-offset-2 text-base">
                    {title}
                  </span>
                  {/* <p className="text-neutral-500 truncate">{body}</p> */}
                </div>
                {/* <p className="text-[#111111]">Read more</p> */}
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
