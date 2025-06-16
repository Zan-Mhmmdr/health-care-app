import { getData, getDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    try {
        if (id) {
            const detailProduct = await getDataById('products', id);
            console.log("ID:", id);
            console.log("Detail Product:", detailProduct);

            if (detailProduct) {
                return NextResponse.json({
                    status: 200,
                    message: "success",
                    data: detailProduct,
                });
            } else {
                return NextResponse.json({
                    status: 404,
                    message: "Product not found",
                });
            }
        }

        const products = await getData('products');
        console.log("All Products:", products);

        return NextResponse.json({
            status: 200,
            message: "success",
            data: products,
        });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({
            status: 500,
            message: "Internal server error",
        });
    }
}
