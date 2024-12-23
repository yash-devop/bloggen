// import Link from "next/link"
import React from "react"
// import { Badge } from "../../ui/badge"

export default function Neutral({
    children
}:{
    children: React.ReactNode
}){
    // const blogData = [
    //     {
    //         id: 1,
    //         name: "Calling Server Action in Dynamic Route Resets globalThis, but Not in Static Route",
    //         date: "2024-04-12",
    //         href: "/",
    //         open: false
    //     },
    //     {   id: 2,
    //         name: "In Next.js 15 with Turbopack mode, the IIFE is not executing as expected, resulting in a strange bug",
    //         date: "2024-04-12",
    //         href: "/",
    //         open: true

    //     },
    //     {
    //         id: 3,
    //         date: "2024-04-12",
    //         name: "Docs: Unnecessary fiels that causes error on next/image Un-configured Host",
    //         href: "/",
    //         open: true
    //     }
    // ]
    return (
        <>
            <div className="text-white bg-black/90 min-h-screen tracking-[-0.6px] selection:text-neutral-800 selection:bg-neutral-500">
                <header>
                    <nav className="py-4 px-4 lg:px-8 border-b border-b-neutral-700 lg:border-b-0">
                        <span className="text-white text-lg">Bloggen.</span>
                    </nav>
                </header>
                <div className="w-full max-w-3xl mx-auto h-full pt-16 px-4 lg:px-0">
                    {children}
                </div>
            </div>
        </>
    )
}

