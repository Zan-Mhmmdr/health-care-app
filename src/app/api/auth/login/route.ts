import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
    const req = await request.json()
    console.log('request', req)
    return NextResponse.json({ status: 200, message: 'success' })
}

