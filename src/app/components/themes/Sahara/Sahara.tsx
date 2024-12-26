import React from "react";
import SoloLogo from "../../logos/logo";
import { getTheme } from "@/app/utils/getTheme";
import BlogFooter from "../BlogFooter";

export default async function Sahara({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await getTheme();
  return (
    <>
      <div className="flex flex-col text-white bg-saharaBg min-h-screen tracking-[-0.6px] selection:text-neutral-800 selection:bg-neutral-500">
        <header>
          <nav className="py-4 px-4 lg:px-6 border-b border-b-neutral-700 lg:border-b-0">
            <SoloLogo
              fillColor={theme === "sahara" ? "#ad9567" : ""}
              strokeColor="#ad9567"
            />
          </nav>
        </header>
        <div className="w-full max-w-3xl mx-auto flex-grow pt-10 px-7 lg:px-0">
          {children}
        </div>
        <BlogFooter />
      </div>
    </>
  );
}
