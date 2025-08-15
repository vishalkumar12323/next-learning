import { NextResponse } from "next/server";

const sampleTasks = [
  {
    _id: "1",
    title: "Welcome to Task Manager!",
    description: "Sign in with Google to save your tasks.",
  },
  {
    _id: "2",
    title: "Add Your First Task",
    description: "Click 'Add Task' to create one.",
  },
  {
    _id: "3",
    title: "Stay Organized",
    description: "Manage tasks easily in one place.",
  },
];
export async function GET() {
  return NextResponse.json(sampleTasks);
}
