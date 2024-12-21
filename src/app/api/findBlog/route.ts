import prisma from "@/app/lib/prisma"
import { auth } from "@/app/utils/auth";
import { NextRequest, NextResponse } from "next/server"

export const GET=async(req:NextRequest)=>{
    const session = await auth();
    console.log('session',session);
    if (!session || !session.user) {
        return NextResponse.json(
          { message: "Unauthorized access. Please Login" },
          { status: 401 }
        );
      }
    const username = session?.user.username
    const blog = await prisma.blog.findFirst({
        where: {
            owner: username
        }
    })
    
    if(!blog){
        return NextResponse.json({
            success: false,
            message: "No blog found."
        })
    }

    return NextResponse.json({
        success: true,
        message: "Blog found"
    })
}