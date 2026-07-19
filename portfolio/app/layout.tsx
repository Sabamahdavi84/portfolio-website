import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme/ThemeContext";
import Navbar from "@/components/navbar/Navbar";



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
      className={"dark h-full antialiased"}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
