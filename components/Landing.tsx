import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import { TTaskProps } from "@/app/lib/types";

export default function LandingPage({
  sampleTasks,
}: {
  sampleTasks: TTaskProps[];
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
      <p className=" mb-6 text-center max-w-md">
        Organize your work and life in one place. Sign in with Google to create,
        edit, and manage your tasks securely in the cloud.
      </p>

      <GoogleLoginButton />

      <div className="mt-10 w-full">
        <ul className="max-w-4/5 flex gap-7 flex-wrap justify-center mx-auto p-4 shadow-md rounded-lg space-y-3 list-none">
          {sampleTasks.map((task: TTaskProps, idx: number) => {
            return (
              <React.Fragment key={task._id}>
                <li className="min-w-[200px] w-fit border p-4 rounded group relative hover:scale-105 transition-all">
                  <div className="py-2">
                    <h2
                      className={`font-semibold text-xl ${
                        task.completed ? "line-through" : ""
                      }`}
                    >
                      {task.title}
                    </h2>
                    <p className="text-gray-400">{task.description}</p>
                  </div>
                  <div className="space-x-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a className="bg-yellow-500  text-white px-2 py-1 rounded hover:bg-yellow-600 cursor-pointer">
                      Edit
                    </a>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 cursor-pointer">
                      Delete
                    </button>
                  </div>
                </li>
                {idx < sampleTasks.length - 1 && (
                  <div className="flex items-center justify-center text-gray-500">
                    <span className="text-2xl">&rarr;</span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
