import React from "react"
import SoloLogo from "../../logos/logo"
import BlogFooter from "../BlogFooter"
import { getTheme } from "@/app/utils/getTheme"

export default async function Neutral({
    children
}:{
    children: React.ReactNode
}){
    const theme = await getTheme()
    return (
        <>
            <div className="flex flex-col text-white bg-black/90 min-h-screen tracking-[-0.6px] selection:text-neutral-800 selection:bg-neutral-500">
                <header>
                    <nav className="py-4 px-4 lg:px-6 border-b border-b-neutral-700 lg:border-b-0">
                        <SoloLogo fillColor={theme === "neutral" ? "#6E6D6D" : ""} strokeColor="#6E6D6D" textColor="#ffffff"/>
                    </nav>
                </header>
                    <div className="w-full max-w-3xl mx-auto flex-grow pt-16 px-4 lg:px-0">
                        {children}
                    </div>
                    <BlogFooter />
            </div>
        </>
    )
}

