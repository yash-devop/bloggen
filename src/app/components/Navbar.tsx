import Link from "next/link";
import Bloggen from "./logos/bloggen";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <header className="border-bs border-b-[#DADADA] py-4">
        <nav className="flex py-3 justify-between items-center w-full mx-auto">
          <Bloggen />
          <div className="flex gap-2 items-center">
            <a href={`https://x.com/yash_devop`} className="flex gap-1">
              <Button variant={"link"} className="p-0">Twitter</Button>
              <ArrowUpRight size={16} className="shrink-0 p-0"/>
            </a>
            <Link href={`/signin`}>
              <Button className="font-sans border border-[#2b2b2b] bg-black hover:bg-black text-white hover:bg-gradient-to-t transition-all hover:from-black hover:to-[#2b2b2b] focus:bg-gradient-to-t focus:from-gray-700 focus:to-gray-900">
                Sign in to your account
              </Button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
