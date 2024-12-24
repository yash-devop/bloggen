import Neutral from "@/app/components/themes/Neutral/Neutral";
import Sahara from "@/app/components/themes/Sahara/Sahara";
import { getTheme } from "@/app/utils/getTheme";
import { headers } from "next/headers";
import React from "react";


export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const theme = await getTheme()
  console.log('theme in layout',theme);
  const ThemeLayout = theme === "neutral" ? Neutral : Sahara;
  return <ThemeLayout>{children}</ThemeLayout>;
}
