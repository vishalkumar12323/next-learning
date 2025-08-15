import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Task-Manager",
  description:
    "Task manager provide you to create, edit, delete your all task that you do in your day.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        suppressHydrationWarning
        className="flex  flex-col h-screen w-full bg-slate-950 text-white"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
