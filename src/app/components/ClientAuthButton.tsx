"use client";

import { signIn } from "next-auth/react";
import { Button, ButtonProps } from "./ui/button";
import React from "react";
import { Github } from "./logos/github";

export default function ClientAuthButton({
  type,
  redirectTo = "install",
  buttonProps,
}: {
  type: "github" | "google";
  redirectTo: string;
  buttonProps?: ButtonProps;
}) {
  const authRenderer:{
    [key:string]: {
        title: string,
        icon?:React.JSX.Element
    }
  } = {
    github: {
        title: "Continue with Github",
        icon: <Github />
    }
  };
  return (
      <Button
        type="button"
        onClick={async () =>
          await signIn(type, {
            redirectTo,
          })
        }
        {...buttonProps}
      >
        {authRenderer[type]?.icon}
        <p>{authRenderer[type]?.title}</p>
      </Button>
  );
}
