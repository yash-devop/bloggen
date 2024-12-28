"use client";

import { ArrowUpRight, ChevronRight, GitBranch, Github, MousePointer2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import React, { JSX, useMemo } from "react";
import DotBackground from "./svgs/DotBackground";

export default function Features() {
  const contents = [
    {
      hightlight: "Sign in",
      heading: "with your github",
      subHeading:
        "Quickly and securely sign in with your GitHub account to get started.",
      element: GithubImage,
      position: "left",
    },
    {
      hightlight: "Install",
      heading: "the bloggen app",
      subHeading:
        "Bloggen app will communicate with your Github's choosen repository.",
      element: InstallAppImage,
      position: "right",
    },
    {
      hightlight: "Create Blog",
      heading: "with your github issues",
      subHeading:
        "Quickly and securely sign in with your GitHub account to get started.",
      element: CreateBlogImage,
      position: "left",
    },
  ];

  return (
    <>
      <div className="">
        {/* <p className="text-neutral-400 font-sans text-3xl font-medium tracking-tight max-w-3xl"><span className="text-primary font-sans">Features.</span>Connect the Dots with Powerful Features That Simplify Complex Tasks and Streamline Your Workflow Effortlessly</p> */}
        <p className="text-black font-sans text-3xl font-medium tracking-tight pt-14 text-center">
          Features
        </p>
        <p className="text-neutral-400 font-sans text-[17px] font-medium tracking-[-0.5px] pt-4 pb-14 text-center">
          You can start your blog effortlessly in Just 3 Simple Steps.
        </p>

        <div className="flex flex-col items-center gap-12 max-w-[1100px] mx-auto">
          {contents.map((content, idx) => {
            // Memoize the content rendering
            const contentMemo = useMemo(() => {
              return content.position === "left" ? (
                <>
                  <FeatureContent {...content} />
                  <FeatureImage
                    Element={content.element}
                    position={content.position}
                  />
                </>
              ) : (
                <>
                  <FeatureImage
                    Element={content.element}
                    position={content.position}
                  />
                  <FeatureContent {...content} />
                </>
              );
            }, [content.position, content.element]);

            return (
              <div
                key={idx}
                className="w-full h-[800px] md:h-[550px] rounded-tl-2xl rounded-bl-2xl flex flex-col md:flex-row"
              >
                {contentMemo}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const FeatureContent = ({
  heading,
  hightlight,
  subHeading,
  position,
}: {
  hightlight: string;
  heading: string;
  subHeading: string;
  position: string;
}) => {
  return (
    <>
      <div
        className={`w-full md:w-1/2 h-full flex justify-center items-center`}
      >
        <div className="px-8 md:px-14 lg:px-28">
          <p className="text-3xl leading-[1.2em]">
            <span className="">{hightlight}</span>
            <br />
            {heading}
          </p>
          <p className="py-4 leading-[1.75em] text-[#3a3939]">{subHeading}</p>
          <Link
            href={``}
            className="flex items-center justify-center md:justify-start mt-8 group text-primary"
          >
            <Button variant={"link"} className="p-0">
              Sign in with github
            </Button>
            <ChevronRight
              size={15}
              className="ml-1 shrink-0 group-hover:translate-x-3 transition-all"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

const FeatureImage = ({
  Element,
  position,
}: {
  Element: React.ComponentType;
  position: string;
}) => {
  return (
    <>
      <div
        className={`border border-neutral-300 rounded-2xl w-full md:w-1/2 h-full  py-20 px-6 md:px-9 lg:px-14 flex items-center justify-center`}
      >
        <Element />
      </div>
    </>
  );
};

const GithubImage = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-full w-full rounded-tr-2xl rounded-br-2xl overflow-hidden">
        <DotBackground className="absolute inset-0 h-full bg-pusrple-950 w-[600px] md:w-full shrink-0" />
        <div className="relative text-center max-w-md py-2 px-2 rounded-full bg-rose-100 w-fit transition-all">
          <Button className="w-full sm:w-auto rounded-full bg-gradient-to-t from-primary from-0% to-rose-500 to-100% cursor-pointer">
            <Github />
            Sign in with GitHub
          </Button>
        </div>
        <div className=" w-[500px] h-[40px] md:h-[65px] lg:h-[80px] absolute top-0 bg-gradient-to-t from-white from-0% to-white to-100% blur-xl"></div>
        <div className="w-[500px] h-[40px] md:h-[65px] lg:h-[90px] absolute bottom-0 bg-gradient-to-b from-white from-10% to-white to-100% blur-xl"></div>
        <div className="w-[50px] h-[40px] md:h-[65px] lg:h-[90px] absolute left-0 bg-gradient-to-b from-white from-10% to-white to-100% blur-2xl"></div>
        <div className="w-[50px] h-[40px] md:h-[65px] lg:h-[90px] absolute right-0 bg-gradient-to-b from-white from-10% to-white to-100% blur-2xl"></div>
      </div>
    </>
  );
};

const InstallAppImage = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-full w-full rounded-tr-2xl rounded-br-2xl overflow-hidden">
        {/* Background with blur effect */}

        {/* Button container */}
        <div className="relative z-10 p-2 flex flex-col">
          <Button className="bg-[#121212] bg-gradient-to-t from-[#121212] to-[#494949] to-100%">
            <Github />
            Install Bloggen app
            <div className="absolute w-[200px] h-[90px] bg-primary top-10 blur-[88px] z-[-1]"></div>
          </Button>
          <div className="flex justify-center items-center gap-5">
            <DashedAnimatedSVG dir="up-to-down" />
            <DashedAnimatedSVG dir="down-to-up" />
          </div>
          <div className="h-9 px-3.5 py-4 rounded-xl bg-[#121212] bg-gradient-to-t from-[#121212] text-sm to-[#494949] text-white flex items-center justify-center gap-2">
            <GitBranch size={16} />
            <p>Joe's Repository</p>
          </div>
          {/* <div className="relative -bottom-4 border-t border-dashed rotate-90 w-[100px] border-black"/> */}
        </div>
      </div>
    </>
  );
};
const CreateBlogImage = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-full w-full rounded-tr-2xl rounded-br-2xl overflow-hidden">
        {/* Background with blur effect */}

        {/* Button container */}
        <div className="relative z-10 p-2 flex flex-col w-full items-center justify-center">
          <div className="flex items-center py-2 gap-3 bg-rose-100 border border-rose-400 px-3 rounded-2xl shadow-md shadow-rose-300 cursor-default select-none">
            <div className="size-10 bg-rose-200 rounded-lg flex items-center justify-center">
              <BlogIcon className="shrink-0"/>
            </div>
            <div>
              <p className="text-sm md:text-base tracking-tight">Create Blog</p>
              <p className="text-neutral-500 text-xs font-light">Start building blog for the issues.</p>
            </div>
          </div>
          <Cursor name="Yash" className="relative bottom-2 -right-20"/>
        </div>
      </div>
    </>
  );
};

const DashedAnimatedSVG = ({ dir }: { dir: "up-to-down" | "down-to-up" }) => {
  return (
    <>
      <svg
        className={`${
          dir === "up-to-down" ? "moving-UTD-Dash" : "moving-DTU-Dash"
        }`}
        width="20"
        height="100"
        viewBox="0 0 1 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.5"
          y1="2.18557e-08"
          x2="0.499998"
          y2="49"
          stroke="#F96D82"
          strokeDasharray="1.4 2"
          strokeWidth={1}
        />
      </svg>
    </>
  );
};


const Cursor=({
  name = "Joe",
  className
}:{
  name: string,
  className?: string
})=>{
  return (
    <>
      <div className={`${className} w-fit`}>
        <MousePointer2 className="stroke-[#E9435C] fill-[#E9435C] relative"/>
        <div className="rounded-full py-1 px-3 w-full truncate bg-green-400 relative left-5  text-xs text-white cursor-default select-none">
          <p>{name}</p>
        </div>
      </div>
    </>
  )
}
const BlogIcon=({
  className
}:{
  className?: string
})=>{
  return (
    <>
     <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M7.65625 2.34375H6.45833C5.3125 2.34375 4.375 3.28125 4.375 4.42708V20.5729C4.375 21.7187 5.3125 22.6562 6.45833 22.6562H7.65625M7.65625 2.34375V22.6562M7.65625 2.34375H18.5417C19.6875 2.34375 20.625 3.28125 20.625 4.42708V20.5729C20.625 21.7187 19.6875 22.6562 18.5417 22.6562H7.65625" stroke="#E9435C" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    </>
  )
}



