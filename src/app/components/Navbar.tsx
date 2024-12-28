"use client";

import Link from "next/link";
import Bloggen from "./logos/bloggen";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Session } from "next-auth";

export default function Navbar() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    (async () => {
      const currentSession = await getSession();
      setSession(currentSession);
    })();
  }, []);

  return (
    <header className="border-b border-b-[#DADADA] py-4">
      <nav className="flex py-3 justify-between items-center w-full mx-auto">
        <Bloggen />

        <div className="flex gap-2 items-center">
          <a
            href="https://x.com/yash_devop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center"
          >
            <Button variant="link" className="p-0">
              Twitter
            </Button>
            <ArrowUpRight size={16} className="shrink-0 p-0" />
          </a>

          {session && session?.user ? (
            <Link href="/dashboard">
              <Button className="font-sans border border-[#2b2b2b] bg-black hover:bg-black text-white hover:bg-gradient-to-t transition-all hover:from-black hover:to-[#2b2b2b] focus:bg-gradient-to-t focus:from-gray-700 focus:to-gray-900">
                Go to Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/signin">
              <Button className="font-sans border border-[#2b2b2b] bg-black hover:bg-black text-white hover:bg-gradient-to-t transition-all hover:from-black hover:to-[#2b2b2b] focus:bg-gradient-to-t focus:from-gray-700 focus:to-gray-900">
                Sign in to your account
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
