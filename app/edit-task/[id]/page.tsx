import { internal_api_url } from "@/app/lib/api";
import TaskForm from "@/components/Task-Form";
import { TTaskProps } from "@/app/lib/types";
import { cookies } from "next/headers";

export default async function EditTaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const { id } = await params;
  const res = await fetch(`${internal_api_url}/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const task: TTaskProps = await res.json();
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
      <TaskForm task={task} />
    </main>
  );
}
