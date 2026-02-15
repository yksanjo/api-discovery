import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Discovery - Discover APIs by Category",
  description: "Browse and discover APIs organized by category",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
