import "./globals.css";

export const metadata = {
  title: "Next.js Learning",
  description: "This is a learning project for next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <header
          style={{
            padding: "1rem",
            backgroundColor: "lightblue",
            color: "black",
          }}
        >
          <h1>Navbar</h1>
        </header>
        {children}
        <footer
          style={{
            padding: "1rem",
            backgroundColor: "lightblue",
            color: "black",
            marginTop: "auto",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
