"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Stories from "react-insta-stories";
import { Button } from "./components/ui/button";
import { Instrument_Serif } from "next/font/google";
import Features from "./components/Features";
import Link from "next/link";
import { BloggenVector } from "./components/svgs/BloggenVector";
const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  style: "italic",
});
export default function Home() {
  const [storiesLoaded, setStoriesLoaded] = useState(false);

  const UI = [
    {
      url: "/neutral.png",
    },
    {
      url: "/sahara.png",
    },
  ];

  useEffect(() => {
    setStoriesLoaded(true);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <Navbar />
        <div className="flex-grow p-3 ">
          <div
            className="relative max-w-[1400px] mx-auto w-full bg-cover bg-center rounded-tr-3xl rounded-tl-3xl my-3"
            style={{
              backgroundImage: "url('/pink2.png')",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#fe526ca4] from-0% to-white to-100% opacity-100 z-[1] rounded-tr-3xl rounded-tl-3xl"></div>
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white to-100%"></div> */}
            <div className="absolute -bottom-5 left-0 w-full h-[90px] bg-gradient-to-b from-white from-5% to-white to-100% z-[100] blur-[100px]"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[40]">
              <img
                src="/cloud1.png"
                alt=""
                className="absolute -bottom-12 max-w-full cloudanimation"
                style={
                  { "--i": 1 } as React.CSSProperties &
                    Record<string, string | number>
                }
              />
              <img
                src="/cloud2.png"
                alt=""
                className="absolute -bottom-12 max-w-full cloudanimation"
                style={
                  { "--i": 2 } as React.CSSProperties &
                    Record<string, string | number>
                }
              />
              <img
                src="/cloud3.png"
                alt=""
                className="absolute -bottom-12 max-w-full cloudanimation"
                style={
                  { "--i": 3 } as React.CSSProperties &
                    Record<string, string | number>
                }
              />
              <img
                src="/cloud4.png"
                alt=""
                className="absolute -bottom-12 max-w-full cloudanimation"
                style={
                  { "--i": 4 } as React.CSSProperties &
                    Record<string, string | number>
                }
              />
              <img
                src="/cloud5.png"
                alt=""
                className="absolute -bottom-12 max-w-full cloudanimation"
                style={
                  { "--i": 5 } as React.CSSProperties &
                    Record<string, string | number>
                }
              />
            </div>

            <div className="mx-auto text-center font-sans flex-grow relative z-[11] lg:pt-40 md:pt-36 pt-24 px-4">
              <div className="flex flex-col justify-center items-center z-[50]">
                <h1
                  className={`lg:text-7xl md:text-6xl text-3xl sm:text-5xl font-semibold tracking-tight text-white drop-shadow-2xl backdrop-blur-[2px] py-3 text-center`}
                >
                  Turn your github repository <br />
                  issues into —{" "}
                  <span
                    className={`italic font-light tracking-tighter  ${instrumentSerif.className}`}
                  >
                    blog
                  </span>
                </h1>
                <p className="font-medium text-[#f0f0f0] tracking-wide text-xl py-5 pb-12">
                  Transform your GitHub issues into polished, shareable blogs —{" "}
                  <br />
                  streamline knowledge, one post at a time.
                </p>

              </div>

              <div className="max-w-5xl w-full mx-auto py-2 bg-[#e299a4] p-2 rounded-xl z-[12]">
                {storiesLoaded ? (
                  <Stories
                    key={Math.random()}
                    stories={UI}
                    defaultInterval={8000}
                    width="100%"
                    height="100%"
                    storyContainerStyles={{
                      objectFit: "cover",
                      borderRadius: "16px",
                    }}
                    storyStyles={{
                      objectFit: "contain",
                      borderRadius: "12px",
                      border: "1px solid #D5D5D5",
                    }}
                    progressStyles={{
                      backgroundColor: "#FE526C",
                      borderRadius: "15px",
                    }}
                    progressContainerStyles={{
                      marginTop: "-25px",
                      width: "100%",
                      padding: "0px",
                    }}
                    loop={true}
                  />
                ) : (
                  <div className="h-[650px] bg-neutral-200 w-full"></div>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-[1480px] mx-auto h-full py-10 w-full border-l border-r border-dashed border-neutral-300">
            <Features />
          </div>
        </div>
        <footer className="bg-white text-black pt-40 px-10 font-sans tracking-tight overflow-hidden">
          <div className="bg-blues-500 flex flex-col justify-center items-center">
            <p className="text-neutral-400">© {new Date().getFullYear()} Bloggen. All rights reserved.</p>
            <div className="overflow-hidden translate-y-9 relative hidden lg:block">
              <BloggenVector />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2" style={{background:"linear-gradient(180deg, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.48) 72%)"}} />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

