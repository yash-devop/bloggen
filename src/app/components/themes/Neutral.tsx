import Link from "next/link"
import React from "react"
import { Badge } from "../ui/badge"

export default function Neutral(){
    const blogData = [
        {
            id: 1,
            name: "Calling Server Action in Dynamic Route Resets globalThis, but Not in Static Route",
            date: "2024-04-12",
            href: "/",
            open: false
        },
        {   id: 2,
            name: "In Next.js 15 with Turbopack mode, the IIFE is not executing as expected, resulting in a strange bug",
            date: "2024-04-12",
            href: "/",
            open: true

        },
        {
            id: 3,
            date: "2024-04-12",
            name: "Docs: Unnecessary fiels that causes error on next/image Un-configured Host",
            href: "/",
            open: true
        }
    ]
    return (
        <>
            <div className="text-white bg-black/90 min-h-screen tracking-[-0.6px] selection:text-neutral-800 selection:bg-neutral-500">
                <header>
                    <nav className="py-4 px-4 lg:px-8 border-b border-b-neutral-700 lg:border-b-0">
                        <span className="text-white text-lg">Bloggen.</span>
                    </nav>
                </header>
                <div className="w-full max-w-3xl mx-auto h-full pt-16 px-4 lg:px-0">
                    <p className="text-3xl md:text-4xl py-10">Blog</p>
                    <div className="grid grid-cols-[100px_100px_1fr] w-full gap-y-6">
                        {
                            blogData.map(({name , date , href , id , open})=>(
                                <React.Fragment key={id}>
                                    <p className="text-neutral-500 text-base">{date}</p>
                                    <Badge variant={"default"} className={`gap-1 w-fit rounded-full ${open ? "bg-green-800/30 text-green-600 border-green-500 hover:bg-green-800 cursor-default" : "bg-neutral-800 text-neutral-600 border-neutral-700  hover:bg-neutral-800 cursor-default"}`}>
                                        <div className={`${open ? "bg-green-500 animate-pulse" : "bg-neutral-600"} size-2 rounded-full`}/>
                                        {open ? "open" : "closed"}
                                    </Badge>
                                    <Link href={href} className="truncate">
                                        <span className="text-left  text-neutral-300 underline underline-offset-2 text-base">
                                            {name}
                                        </span>
                                    </Link>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}