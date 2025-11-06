import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const authUser = request.cookies.get("auth-user")?.value

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!authUser) {
      return NextResponse.redirect(new URL("/auth/admin", request.url))
    }

    try {
      const user = JSON.parse(authUser)
      if (user.role !== "admin") {
        return NextResponse.redirect(new URL("/user/dashboard", request.url))
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/auth/admin", request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith("/user")) {
    if (!authUser) {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }

    try {
      const user = JSON.parse(authUser)
      if (user.role !== "user") {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url))
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
}
