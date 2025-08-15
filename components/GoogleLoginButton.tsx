"use client";
import Image from "next/image";
import { external_api_url } from "@/app/lib/api";

export default function GoogleLoginButton() {
  const loginWithGoogle = () => {
    window.location.href = `${external_api_url}/auth/google`;
  };

  return (
    <button
      onClick={loginWithGoogle}
      className="flex items-center font-medium gap-2 bg-slate-900 hover:bg-transparent px-5 py-2 border rounded-lg shadow hover:shadow-md transition cursor-pointer"
    >
      <Image
        src="/google.png"
        alt="Google"
        className="w-5 h-5 mr-2"
        width={5}
        height={5}
      />
      Login with Google
    </button>
  );
}
