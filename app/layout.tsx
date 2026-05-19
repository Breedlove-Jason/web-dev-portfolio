import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jason Breedlove | Web Developer Portfolio",
  description:
    "A 2026 Web Developer Portfolio showcasing TypeScript, Next.js, Tailwind CSS, and Python projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-950 text-gray-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
