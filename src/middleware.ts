import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const middleware = (req: NextRequest) => {
    const isLogin = false
    if (req.nextUrl.pathname.startsWith("/dashboard/product")) {
        if (!isLogin) {
            return NextResponse.redirect(new URL("/login", req.url))
        }
    }
}

