import Link from "next/link";
import { cookies } from "next/headers";
import Profile from "./Profile";
import { internal_api_url } from "@/app/lib/api";
import { TUserProps } from "@/app/lib/types";

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  let user: TUserProps | null = null;
  if (token?.value) {
    const res = await fetch(`${internal_api_url}/user`, {
      method: "GET",
      cache: "force-cache",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    user = await res.json();
  }
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">📝 TaskManager</Link>
      </div>

      <div className="space-x-4 flex justify-center items-center">
        <Link href="/home" className="hover:text-gray-300">
          Home
        </Link>
        <Link
          href="/add-task"
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Add Task
        </Link>
        {user && <Profile user={user} />}
      </div>
    </nav>
  );
}
