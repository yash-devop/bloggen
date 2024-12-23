import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/utils/auth";
import { notFound, redirect } from "next/navigation";
import { isValidSlug } from "./app/utils/isValidSlug";

const GET_BLOG_URL = "http://localhost:3000/api/findBlog"; // had to do this bcoz prisma doesnt work in edge env... to get it work , we have to use prisma accelerate.
const GET_APP_INSTALLATION = "http://localhost:3000/api/checkInstallation";
type BlogStatus = {
  success: boolean;
  message: string;
};
export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
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
    const installation = await response.json();

    console.log('installation in middleware',installation);
    if(!response.ok){   //404
      console.log('installation not found.... in dahsboard mid');
      return NextResponse.redirect(new URL("/install",request.url))
    }
  }

  // if (request.nextUrl.pathname.startsWith("/install")) {
  //   console.log('Installa mid work');
  // }

  const host = request.headers.get("host");
  const subdomain = host?.split(".")[0];

  if (
    subdomain === "www" ||
    subdomain === BASE_DOMAIN ||
    url.pathname?.endsWith("/not-found")
  ) {
    console.log("pathname unhandled", url.pathname);
    console.log("subdomain unhandled", subdomain);
    console.log("BASE_DOMAIN:", BASE_DOMAIN);
    console.log("subdomain === BASE_DOMAIN", subdomain === BASE_DOMAIN);
    return NextResponse.next();
  }

  const isValid = isValidSlug(subdomain);

  if (!isValid) {
    return NextResponse.redirect(
      new URL(`${url.protocol}//${BASE_DOMAIN}/not-found`)
    );
  }

  console.log("values", {
    url,
    host,
    subdomain,
  });

  const urlWithParams = new URL(
    `/blog/${subdomain}${url.pathname}${url.search}${url.hash}`,
    request.url
  );

  const response = NextResponse.rewrite(urlWithParams);
  response.headers.set("x-theme", "neutral");      // im setting this for blog theme ( get from database ).
  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon|api).*)"], // Match all routes except static assets and APIs.
};
