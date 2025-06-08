"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  const params = pathname.split("/");
  return (
    <h1>
      Review {params[4]} for Product {params[2]} not found
    </h1>
  );
}
