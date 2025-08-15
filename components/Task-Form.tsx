"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { internal_api_url } from "@/app/lib/api";
import { TTaskProps } from "@/app/lib/types";

export default function TaskForm({ task }: { task?: TTaskProps }) {
  const [taskData, setTaskData] = useState({
    title: task?.title || "",
    description: task?.description || "",
    completed: task?.completed || false,
  });
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (task) {
      await fetch(`${internal_api_url}/tasks/${task._id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });
    } else {
      await fetch(`${internal_api_url}/tasks`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });
    }
    router.push("/");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div>
        <label htmlFor="title" className="text-xl">
          Title
        </label>
        <input
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
          placeholder="Task title"
          className="border p-2 w-full rounded"
          id="title"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="text-xl">
          Description
        </label>
        <textarea
          value={taskData.description}
          onChange={(e) =>
            setTaskData({ ...taskData, description: e.target.value })
          }
          placeholder="Task description"
          className="border p-2 w-full rounded"
          id="description"
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={taskData.completed ? true : false}
          onChange={(e) =>
            setTaskData({ ...taskData, completed: e.target.checked })
          }
        />
        <label htmlFor="completed" className="text-xl px-2">
          Mark as complete
        </label>
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 trasnsition text-white px-4 py-2 rounded cursor-pointer"
      >
        {task ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
