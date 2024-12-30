"use client";

import { signOut } from "next-auth/react";
import { LogOut , LucideProps} from "lucide-react";
import { cn } from "../utils/utils";

export default function ClientSideLogoutButton({
  Icon = LogOut,
  className
}:{
  Icon?: React.ComponentType<LucideProps>
  className?: string
}) {
  return (
    <>
      <div
        onClick={async () => await signOut({redirectTo: "/signin"})}
        className={cn(`flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-3 py-1 cursor-pointer text-sm text-white hover:bg-destructive transition-all`, className)}
      >
        {<Icon size={14} />}
        <span className="tracking-tighter pb-0.5">Sign out</span>
      </div>
    </>
  );
}
