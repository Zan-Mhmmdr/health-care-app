import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";


const onlyAdminPage = ['/dashboard']

const withAuth = (middleware: NextMiddleware, requireAuth: string[] = []) => {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname

        if (requireAuth.includes(pathname)) {
            const token = await getToken({
                req,
                secret: process.env.NEXT_SECRET_TOKEN
            })

            if (!token) {
                const url = new URL("/login", req.url)
                url.searchParams.set('callbackUrl', encodeURIComponent(req.url))
                return NextResponse.redirect(url)
            }

            if (token.role !== "admin" && onlyAdminPage.includes(pathname)) {
                return NextResponse.redirect(new URL("/", req.url))
            }

            console.log(token)
            console.log("Token:", token);

        }
        console.log("CHECK TOKEN:", await getToken({ req, secret: process.env.NEXT_SECRET_TOKEN }));
        console.log("Current path:", pathname);

        return middleware(req, next)
    }
}

export default withAuth