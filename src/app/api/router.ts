import { NextResponse } from "next/server";

const GET = async () => {

    return NextResponse.json({ status: 200, message: "Product details" });
}

export default GET;