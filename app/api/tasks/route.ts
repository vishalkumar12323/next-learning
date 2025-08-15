import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { external_api_url } from "@/app/lib/api";

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  let token = cookieStore.get("token")?.value;

  if (!token) {
    token = req.headers.get("Authorization")?.replace("Bearer ", "");
  }

  if (!token) {
    return NextResponse.json({ error: "No token found" }, { status: 401 });
  }
  const res = await fetch(`${external_api_url}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Cannot get tasks" },
      { status: res.status }
    );
  }
  const tasks = await res.json();
  return NextResponse.json(tasks);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token?.value) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const res = await fetch(`${external_api_url}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: JSON.stringify(data),
  });

  const task = await res.json();
  return NextResponse.json(task);
}
