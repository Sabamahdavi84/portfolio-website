import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme/ThemeContext";



// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "My potfolio app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={"h-full antialiased"}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
