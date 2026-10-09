import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant Athos",
  description: "Restaurant Athos greece",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="min-h-full antialiased">
      <body className="min-h-full bg-ink font-sans text-sand">{children}</body>
    </html>
  );
}
