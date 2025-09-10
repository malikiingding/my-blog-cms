import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ระบบจัดการบทความ (Blog CMS)",
  description: "ระบบจัดการบทความ (Blog CMS) เป็นระบบตัวอย่างการใช้ Next.js + PHP API พื้นฐานเพื่อไปต่อยอดในการสร้างระบบครั้งถัดไปที่ซับซ้อนมากยิ่งขึ้น",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
