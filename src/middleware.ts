import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/utils/auth";
import { isValidSlug } from "./app/utils/isValidSlug";

// const GET_BLOG_URL = "http://localhost:3000/api/findBlog"; // had to do this bcoz prisma doesnt work in edge env... to get it work , we have to use prisma accelerate.
const VERCEL_URL = "https://bloggenblog.yashstack.com";
const LOCALHOST_URL = "http://localhost:3000";
const GET_APP_INSTALLATION = `${LOCALHOST_URL}/api/checkInstallation`;

export async function middleware(request: NextRequest) {
  console.log("MIDDLEWARE RUNNING");
  const url = request.nextUrl;
  const baseUrl = process.env.NODE_ENV === "production" ? VERCEL_URL : LOCALHOST_URL;
  const BASE_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN as string;
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("DASHBOARD PAGE running");
    const session = await auth();
    if (!session) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
    console.log("Authenticated User !");
    // // check if installation is there or not.
    const response = await fetch(GET_APP_INSTALLATION, {
      method: "GET",
      headers: {
        Cookie: request.headers.get("cookie") || "",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      //404
      console.log(
        `${response.ok}, installation not found.... in dahsboard mid`
      );
      return NextResponse.redirect(new URL("/install", request.url));
    }
  }
  // if (request.nextUrl.pathname.startsWith("/install")) {
  //   console.log('Installa mid work');
  // }
  let hostname = request.headers
    .get("host")!
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  const subdomain = hostname.split(".")[0];

  const searchParams = request.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;
  if (hostname === `${BASE_DOMAIN}`) {
    console.log("url", request.url);
    console.log('Path in normal route :',`${url.protocol}//${hostname}/blog/${subdomain}${path}`);
    const response = NextResponse.next();
    response.headers.set("x-theme", "neutral");
    return response
  }

  if (hostname.includes(subdomain)) {     // eg: hostname is club-dot-sh.blog.localhost:3000 and subdomain is club-dot-sh
    console.log("url", request.url);
    console.log('Path in .localhost:',`${url.protocol}//${hostname}/blog/${subdomain}${path}`);
    const response = NextResponse.rewrite(
      new URL(`${url.protocol}${hostname}/blog/${subdomain}${path}`, baseUrl)      // fix this and good to go !
    );
    response.headers.set("x-theme", "neutral");

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|favicon|api).*)"], // Match all routes except static assets and APIs.
};
