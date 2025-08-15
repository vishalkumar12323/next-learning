import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (token?.value && path === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (!token?.value && path === "/add-task") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token?.value && path === "/home") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home", "/add-task"],
};
