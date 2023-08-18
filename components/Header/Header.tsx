"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { ThemeContext, useContext } from "@/util/ThemeContext";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";

const Header = () => {
  const currentPath = usePathname();

  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${theme} header`}>
      <button className={`${currentPath === "/" ? `${theme} active` : ""} `}>
        <Link href="/">Home</Link>
      </button>
      <button
        className={`${currentPath === "/about" ? `${theme} active` : ""} `}
      >
        <Link href="/about">About</Link>
      </button>
      <button
        className={`${currentPath === "/projects" ? `${theme} active` : ""} `}
      >
        <Link href="/projects">Projects</Link>
      </button>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
