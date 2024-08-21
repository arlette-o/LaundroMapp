import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/structure/navbar";
import Footer from "@/components/structure/footer";

import { connectToMongo } from "@/utils/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LaundroMapp",
  description: "Next Gen Laundry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToMongo();
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
