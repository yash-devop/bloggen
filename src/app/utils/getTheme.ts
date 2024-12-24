import { headers } from "next/headers"

export type ThemeType = "sahara" | "neutral"

export const getTheme=async():Promise<ThemeType>=>{
    const theme = (await headers()).get("x-theme") as ThemeType
    return theme
}