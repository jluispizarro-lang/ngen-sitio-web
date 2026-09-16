import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    if (pathname === "/portal/ingreso") {
      if (token) {
        const dest = token.role === "admin" ? "/admin" : "/portal";
        return NextResponse.redirect(new URL(dest, req.url));
      }
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(new URL("/portal/ingreso", req.url));
    }

    if (pathname.startsWith("/admin") && token.role !== "admin") {
      return NextResponse.redirect(new URL("/portal", req.url));
    }

    if (pathname.startsWith("/portal") && token.role === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    return NextResponse.next();
  },
  {
    // La autorización real (login + rol) se resuelve arriba; esto solo
    // permite que la función de middleware siempre se ejecute.
    callbacks: { authorized: () => true },
  }
);

export const config = {
  matcher: ["/admin", "/admin/:path*", "/portal", "/portal/:path*"],
};
