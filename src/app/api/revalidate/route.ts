import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const tag = req.nextUrl.searchParams.get("tag");
    const secret = req.nextUrl.searchParams.get("secret_token")
    console.log(tag, secret)

    if (!tag) {
        return NextResponse.json({
            status: 400,
            message: "Tag is required",
        })
    }

    if (secret !== process.env.SECRET_TOKEN) {
        return NextResponse.json({
            status: 401,
            messege: "Unauthorized",
        })
    }


    revalidateTag(tag)

    return NextResponse.json({
        status: 200,
        message: `Revalidated ${tag} successfully`,
    })
}