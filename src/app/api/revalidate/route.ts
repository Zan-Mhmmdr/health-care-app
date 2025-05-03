import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const tag = req.nextUrl.searchParams.get("tag");

    if (!tag) {
        return NextResponse.json({
            status: 400,
            message: "Tag is required",
        })
    }

    revalidateTag(tag)

    return NextResponse.json({
        status: 200,
        message: `Revalidated ${tag} successfully`,
    })
}