import { NextRequest, NextResponse } from "next/server";
import { external_api_url } from "@/app/lib/api";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  let token = cookieStore.get("token")?.value;

  if (!token) {
    token = req.headers.get("Authorization")?.replace("Bearer ", "");
  }

  if (!token) {
    return NextResponse.json({ error: "No token found" }, { status: 401 });
  }

  const res = await fetch(`${external_api_url}/auth/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: res.status }
    );
  }

  const user = await res.json();
  return NextResponse.json(user);
}
