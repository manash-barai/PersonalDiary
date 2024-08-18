import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal-Diary",
  description: "The is a web application designed to allow users to create, save, and manage personal diary entries. Users can write about various topics and choose to keep these entries private or share them with others. If shared, other users who have an account on the site and have been granted permission can view and even edit the shared entries. This collaborative feature ensures that users can not only document their thoughts but also engage in shared journaling experiences with trusted individuals. The application emphasizes user privacy, control over content, and seamless collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
