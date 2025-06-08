import "./globals.css";

export const metadata = {
  title: "Next.js Testing",
  description: "This is a testing project for next.js"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}