"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@self.id/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider client={{ ceramic: "testnet-clay" }}>
      <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
