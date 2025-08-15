"use client";
import React, { useState } from "react";
import Image from "next/image";
import { internal_api_url } from "@/app/lib/api";
import { TUserProps } from "@/app/lib/types";

export default function Profile({ user }: { user: TUserProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    try {
      const response = await fetch(`${internal_api_url}/logout`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div>
      <Image
        src={user.picture}
        alt={user.name}
        width={30}
        height={30}
        className="rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute top-16 right-0 p-4 bg-slate-900 rounded shadow-lg">
          <h2 className="font-bold">{user.name}</h2>
          <p>{user.email}</p>
          <button
            className="mt-2 bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded cursor-pointer"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
