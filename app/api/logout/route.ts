import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { external_api_url } from "@/app/lib/api";

export async function DELETE(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    let token = cookieStore.get("token")?.value;

    if (!token) {
      token = req.headers.get("Authorization")?.replace("Bearer ", "");
    }

    if (!token) {
      return NextResponse.json({ error: "No token found" }, { status: 401 });
    }
    const res = await fetch(`${external_api_url}/auth/logout`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to logout" }, { status: 500 });
    }

    const response = NextResponse.json({
      message: "Logged out successfully",
      success: true,
    });

    response.cookies.set({
      name: "token",
      value: "",
      expires: new Date(0),
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
