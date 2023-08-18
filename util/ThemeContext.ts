import { Dispatch, SetStateAction, createContext, useContext } from "react";
const ThemeContext = createContext<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}>({
  theme: "dark",
  setTheme: () => {},
});

export { ThemeContext, useContext };
