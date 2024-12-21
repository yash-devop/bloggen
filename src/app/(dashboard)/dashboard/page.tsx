import prisma from "@/app/lib/prisma"
import { auth } from "@/app/utils/auth"
import Link from "next/link"

export default async function DashboardPage(){
    const session = await auth()
    const blogs = await prisma.blog.findMany({
        where:{
            owner: session?.user.username
        }
    })
    return (
        <>
            <p>HOME DASHBOARD PAGE.</p>
            <p>Below are the all blogs.: </p>
            <div className="space-x-4">
                {
                    blogs && blogs.length > 0 ? blogs.map((blog)=>(
                        <Link href={`/dashboard/blog/${blog.id}`} key={blog.id} className="bg-emerald-300 px-3 py-1 rounded-lg border border-emerald-500">{blog.blogName}</Link>
                    )) : "0 Blogs Found"
                }
            </div>
            {/* {JSON.stringify(blogs)} */}
        </>
    )
}