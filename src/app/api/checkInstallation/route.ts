import prisma from "@/app/lib/prisma"
import { auth } from "@/app/utils/auth";
import { NextRequest, NextResponse } from "next/server"

export const GET=async(req:NextRequest)=>{
    const session = await auth();
    // console.log('session',session);
    if (!session || !session.user) {
        return NextResponse.json(
          { message: "Unauthorized access. Please Login" },
          { status: 401 }
        );
    }
    const username = session?.user.username
    console.log('username:',username);
    const owner = await prisma.owner.findFirst({
        where:{
            owner: username
        }
    })

    console.log('owner found: ',owner);
    
    if(!owner){
        return NextResponse.json({
            success: false,
            message: "No installationId found."
        },{
            status: 404
        })
    }

    return NextResponse.json({
        success: true,
        message: "InstallationId found",
        installationId: owner?.installationId
    },{
        status: 200
    })
}