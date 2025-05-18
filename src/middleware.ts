import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import withAuth from "./middlewares/withAuth"

export const mainMiddleware = (req: NextRequest) => {
    // const isLogin = true
    // if (!isLogin) {
    //     return NextResponse.redirect(new URL("/login", req.url))
    // }
    const res = NextResponse.next()
    return res
}

export default withAuth(mainMiddleware, ["/dashboard"])