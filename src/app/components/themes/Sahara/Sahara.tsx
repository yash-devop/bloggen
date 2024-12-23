// import Link from "next/link"
import React from "react"
// import { Badge } from "../../ui/badge"

export default function Sahara({
    children
}:{
    children: React.ReactNode
}){
    // const blogData = [
    //     {
    //         id: 1,
    //         name: "Calling Server Action in Dynamic Route Resets globalThis, but Not in Static Route",
    //         description: "Is this happening on only because I'm on nextjs 14 When trying to get image from outside source I'm facing this issue Error: Invalid src prop (https://image-link) on next/image, hostname imge-link is not configured under images in your next.config.js",
    //         date: "2024-04-12",
    //         href: "/",
    //         open: false
    //     },
    //     {   id: 2,
    //         name: "In Next.js 15 with Turbopack mode, the IIFE is not executing as expected, resulting in a strange bug",
    //         description: "Is this happening on only because I'm on nextjs 14 When trying to get image from outside source I'm facing this issue Error: Invalid src prop (https://image-link) on next/image, hostname imge-link is not configured under images in your next.config.js",
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
            <div className="text-white bg-saharaBg min-h-screen tracking-[-0.6px] selection:text-neutral-800 selection:bg-neutral-500">
                <header>
                    <nav className="py-4 px-7 lg:px-8 border-b border-b-neutral-700 lg:border-b-0">
                        <span className="text-[#111111] text-lg">Bloggen.</span>
                    </nav>
                </header>
                <div className="w-full max-w-3xl mx-auto h-full pt-10 px-7 lg:px-0">
                    {children}
                </div>
            </div>
        </>
    )
}



// import Link from "next/link"
// import React from "react"
// import { Badge } from "../ui/badge"

// export default function Sahara({
//     children
// }:{
//     children: React.ReactNode
// }){
//     const blogData = [
//         {
//             id: 1,
//             name: "Calling Server Action in Dynamic Route Resets globalThis, but Not in Static Route",
//             description: "Is this happening on only because I'm on nextjs 14 When trying to get image from outside source I'm facing this issue Error: Invalid src prop (https://image-link) on next/image, hostname imge-link is not configured under images in your next.config.js",
//             date: "2024-04-12",
//             href: "/",
//             open: false
//         },
//         {   id: 2,
//             name: "In Next.js 15 with Turbopack mode, the IIFE is not executing as expected, resulting in a strange bug",
//             description: "Is this happening on only because I'm on nextjs 14 When trying to get image from outside source I'm facing this issue Error: Invalid src prop (https://image-link) on next/image, hostname imge-link is not configured under images in your next.config.js",
//             date: "2024-04-12",
//             href: "/",
//             open: true

//         },
//         {
//             id: 3,
//             date: "2024-04-12",
//             name: "Docs: Unnecessary fiels that causes error on next/image Un-configured Host",
//             href: "/",
//             open: true
//         }
//     ]
//     return (
//         <>
//             <div className="text-white bg-saharaBg min-h-screen tracking-[-0.6px] selection:text-neutral-800 selection:bg-neutral-500">
//                 <header>
//                     <nav className="py-4 px-7 lg:px-8 border-b border-b-neutral-700 lg:border-b-0">
//                         <span className="text-[#111111] text-lg">Bloggen.</span>
//                     </nav>
//                 </header>
//                 <div className="w-full max-w-3xl mx-auto h-full pt-10 px-7 lg:px-0">
//                     <p className="text-3xl md:text-4xl py-10 text-[#111111] ">Blog</p>
//                     <div className="text-red-400">
//                         {children}
//                     </div>
//                     <div className="grid grid-cols-[100px_1fr] w-full md:gap-y-6 gap-x-3 md:gap-x-10">
//                         {
//                             blogData.map(({name , date , href , id , open , description})=>(
//                                 <React.Fragment key={id}>
//                                     <div className="flex flex-col gap-2">
//                                         <p className="text-[#85724d] text-base pt-4">{date}</p>
//                                     </div>
//                                     <Link href={href} className="truncate flex flex-col gap-4 hover:bg-[#fff8e9]  rounded-lg p-4 transition-all duration-300">
//                                         <div>
//                                             <span className="text-left  text-[#111111]  underline underline-offset-2 text-base">
//                                                 {name}
//                                             </span>
//                                             <p className="text-neutral-500 truncate">{description}</p>
//                                         </div>
//                                         <p className="text-[#111111]">Read more</p>
//                                     </Link>
//                                 </React.Fragment>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }