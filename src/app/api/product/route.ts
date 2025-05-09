import { getData, getDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(nextRequest: NextRequest) {
    const { searchParams } = new URL(nextRequest.url);
    const id = searchParams.get("id");

    try {
        if (id) {
            const detailProduct = await getDataById('products', id);

            if (detailProduct) {
                return NextResponse.json({
                    status: 200,
                    message: "success",
                    detailProduct,
                });
            }

            return NextResponse.json({
                status: 404,
                message: "Product not found",
            });
        }

        const products = await getData('products');
        return NextResponse.json({
            status: 200,
            message: "success",
            data: products,
        });

    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}
