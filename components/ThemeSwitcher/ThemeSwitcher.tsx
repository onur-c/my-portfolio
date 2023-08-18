import { ThemeContext } from "@/util/ThemeContext";
import React, { useContext } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button className={`${theme}`} onClick={handleSwitch}>
      <div className={`${theme} theme-ball`} />
    </button>
  );
};

export default ThemeSwitcher;
