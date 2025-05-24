import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";


const onlyAdminPage = ['/dashboard']
const authPage = ['/login', '/register']

const withAuth = (middleware: NextMiddleware, requireAuth: string[] = []) => {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname

        const token = await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET
        })

        
        if (requireAuth.includes(pathname)) {
            if (!token && !authPage.includes(pathname)) {
                const url = new URL("/login", req.url)
                url.searchParams.set('callbackUrl', encodeURIComponent(req.url))
                return NextResponse.redirect(url)
            }
            console.log(token)
            console.log("Token:", token);
        }
        // Jika token ada, cek apakah user sudah login
        if (token) {
            if (authPage.includes(pathname)) {
                return NextResponse.redirect(new URL('/', req.url))
            }

            if (token.role !== "admin" && onlyAdminPage.includes(pathname)) {
                return NextResponse.redirect(new URL("/", req.url))
            }
        }

        console.log("CHECK TOKEN:", await getToken({ req, secret: process.env.NEXT_SECRET_TOKEN }));
        console.log("Current path:", pathname);


        return middleware(req, next)
    }
}

export default withAuth