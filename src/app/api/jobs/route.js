import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {

        const category = request.nextUrl.searchParams.get("category")
        if (!category) {
            
            return NextResponse.json({ success: false, message: "something went wrong" })
        }


        const jobs = await prisma.job.findMany({
            where: {
                category: {
                    name: category,
                },
            },
            include: {
                company: true,
                category: true,
                skills: { include: { skill: true } },
            },
            orderBy: { postedAt: "desc" },
            
            take: 5,
        });

        return NextResponse.json({ success: true , message: "something went wrong" , data: jobs})
        

    } catch (error) {
        return NextResponse.json({success : false , message :"something went wrong"})

    }
    
}