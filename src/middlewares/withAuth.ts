import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

// Halaman yang hanya bisa diakses oleh admin
const onlyAdminPage = ["/dashboard"];

// Halaman yang tidak boleh diakses saat user sudah login
const authPage = ["/login", "/register"];

// Halaman yang tidak butuh autentikasi (bebas diakses)
const publicPage = ["/appointments"];

const withAuth = (middleware: NextMiddleware, requireAuth: string[] = []) => {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    // Jika termasuk halaman publik, langsung jalankan middleware tanpa validasi token
    if (publicPage.includes(pathname)) {
      return middleware(req, next);
    }

    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Jika halaman wajib login dan user belum login
    if (requireAuth.includes(pathname) && !token && !authPage.includes(pathname)) {
      const url = new URL("/login", req.url);
      url.searchParams.set("callbackUrl", encodeURIComponent(req.url));
      return NextResponse.redirect(url);
    }

    // Jika user sudah login:
    if (token) {
      // Cegah akses ke /login atau /register
      if (authPage.includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      // Cegah akses ke halaman admin jika bukan admin
      if (onlyAdminPage.includes(pathname) && token.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return middleware(req, next);
  };
};

export default withAuth;
