import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ApolloWrapper} from "@/lib/backend/apollo-wrapper";
import {ReactNode} from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
      <ApolloWrapper>
        {children}
      </ApolloWrapper>
      </body>
    </html>
  );
}