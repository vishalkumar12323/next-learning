"use client";
import { useRouter } from "next/navigation";
import { internal_api_url } from "@/app/lib/api";
import { TTaskProps } from "@/app/lib/types";
import { useState } from "react";
import { EllipsisVertical } from "lucide-react";

export default function TaskList({ tasks }: { tasks: TTaskProps[] }) {
  const [actionButtonVisible, setActionButtonVisible] = useState(false);
  const router = useRouter();

  async function handleDelete(id: string) {
    await fetch(`${internal_api_url}/tasks/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    router.refresh();
  }
  return (
    <>
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <li
              key={task._id}
              className="min-w-[375px] w-fit border p-4 rounded group relative"
            >
              <div className="">
                <h2
                  className={`font-semibold text-2xl mb-4 ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.title}
                </h2>
                <p className="text-slate-900 bg-white p-1 rounded-sm mb-4 max-w-[325px]">
                  {task.description}
                </p>

                <p
                  style={
                    task.completed
                      ? { background: "#00ff0f45" }
                      : { background: "#ffb1005e" }
                  }
                  className="text-sm capitalize p-2 rounded-lg mb-4 w-fit"
                >
                  {task.completed ? "completed" : "pending"}
                </p>

                <p className="w-fit mb-2">
                  📅
                  {new Date(task.createdAt.toString()).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>

                <button
                  className="mb-1 uppercase cursor-pointer"
                  onClick={() => {}}
                >
                  mark complete
                </button>
              </div>
              <div
                className="space-x-2 absolute right-3 top-3 group-hover:opacity-100 opacity-0  transition-opacity duration-300  cursor-pointer"
                onClick={() => setActionButtonVisible(!actionButtonVisible)}
              >
                <EllipsisVertical className="h-7 w-7 px-[1px] py-[4px] rounded-md bg-slate-600" />
              </div>
              {actionButtonVisible && (
                <div className="flex flex-col absolute right-10 bg-slate-800 p-3 rounded-md top-3 gap-2 group-hover:opacity-100 opacity-0  transition-opacity duration-300">
                  <a
                    href={`/edit-task/${task._id.toString()}`}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 cursor-pointer"
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => handleDelete(task._id.toString())}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          );
        })}
    </>
  );
}
