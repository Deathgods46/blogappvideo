import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import React from "react";
import { AuthProvider } from "@/app/context/useAuthCheck";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className={inter.className}>
          <AuthProvider>
            <Layout>{children}</Layout>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
