import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const mono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transportation Management System",
  description: "Manage trucks, drivers, and schedules effectively.",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${mono.className}`}>
        {children}
      </body>
    </html>
  );
}
