import React from "react";
import { cookies } from "next/headers";
import TaskList from "@/components/Task-List";
import { TTaskProps } from "@/app/lib/types";
import { internal_api_url } from "@/app/lib/api";

export default async function HomePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(`${internal_api_url}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const tasks: TTaskProps[] = await res.json();
  return (
    <>
      <main className="max-w-4/5 mx-auto p-4">
        <ul className="flex gap-7 flex-wrap mt-8">
          <TaskList tasks={tasks} />
        </ul>
      </main>
    </>
  );
}
