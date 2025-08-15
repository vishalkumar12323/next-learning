import { NextRequest, NextResponse } from "next/server";
import { external_api_url } from "@/app/lib/api";
import { cookies } from "next/headers";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const taskId = (await params).id;
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ error: "No token found" }, { status: 401 });
  }

  const res = await fetch(`${external_api_url}/tasks/${taskId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: await res.json() },
      { status: res.status }
    );
  }

  const task = await res.json();
  return NextResponse.json(task);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const data = await req.json();
  const taskId = (await params).id;

  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token?.value) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const res = await fetch(`${external_api_url}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: JSON.stringify(data),
  });

  const task = await res.json();
  return NextResponse.json(task);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const taskId = (await params).id;

  if (!taskId) {
    return NextResponse.json({ error: "Task ID is required" }, { status: 400 });
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token?.value) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const res = await fetch(`${external_api_url}/tasks/${taskId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to delete task" },
      { status: res.status }
    );
  }

  return NextResponse.json({ message: "Task deleted successfully" });
}
