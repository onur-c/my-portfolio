"use client";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/components.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeContext } from "@/util/ThemeContext";
import { useState } from "react";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onur Çelik - Web Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");
  const data = {
    theme,
    setTheme,
  };
  return (
    <html lang="en">
      <body className={`${raleway.className} container ${theme}`}>
        <ThemeContext.Provider value={data}>
          <Header />
          {children}
          <Footer />
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
