"use client";

import { signIn } from "next-auth/react";
// import { Button, ButtonProps } from "./ui/button";
// import { GoogleIcon } from "./icons/Google";
// import { GithubIcon } from "./icons/Github";
// import { cn } from "@/app/utils/utils";
import React from "react";

export default function ClientAuthButton({
  type,
  redirectTo = "install",
//   buttonProps,
}: {
  type: "github" | "google";
  redirectTo: string;
//   buttonProps?: ButtonProps;
}) {
  const authRenderer:{
    [key:string]: {
        title: string,
        icon?:React.JSX.Element
    }
  } = {
    github: {
        title: "Continue with Github",
        icon: <p>GITHUB</p>
    }
  };
  return (
      <button
        type="button"
        onClick={async () =>
          await signIn(type, {
            redirectTo,
          })
        }
      >
        {authRenderer[type]?.icon}
        <p>{authRenderer[type]?.title}</p>
      </button>
  );
}
