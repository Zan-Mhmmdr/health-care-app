import { NextResponse } from "next/server";

const GET = async (request: Request) => {
    const requestUrl = new URL(request.url);
    const { searchParams } = requestUrl;
    const productId = searchParams.get('id');
    console.log("productId", productId);

    return NextResponse.json({ status: 200, message: "Product details", data: { id: productId } });
}

export default GET;