import { FC, useEffect, useState, createContext, useContext } from "react";

// Types and interfaces
type IThemeContext = "dark" | "light";
type IToggleThemeContext = () => void;
interface IProviderProps {}

// Context objects
const themeContext = createContext("dark" as IThemeContext);
const toggoleThemeContext = createContext(
  function () {} as IToggleThemeContext
);

// Provider component
const ThemeContextProvider: FC<IProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<IThemeContext>("dark");

  useEffect(() => {
    const defaultTheme: IThemeContext =
      localStorage.tenzuShopTheme === "light" ? "light" : "dark";
    localStorage.setItem("tenzuShopTheme", defaultTheme);
    const root = window.document.documentElement;
    root.classList.remove(defaultTheme === "dark" ? "light" : "dark");
    root.classList.add(defaultTheme);
    setTheme(defaultTheme);
  }, []);

  const toggleTheme = () => {
    const newMode = theme === "dark" ? "light" : "dark";
    localStorage.setItem("tenzuShopTheme", newMode);
    const root = window.document.documentElement;
    root.classList.remove(theme);
    root.classList.add(newMode);
    setTheme(newMode);
  };

  return (
    <themeContext.Provider value={theme}>
      <toggoleThemeContext.Provider value={toggleTheme}>
        {children}
      </toggoleThemeContext.Provider>
    </themeContext.Provider>
  );
};

// Hooks
const useTheme = () => {
  return useContext(themeContext);
};

const useToggleTheme = () => {
  return useContext(toggoleThemeContext);
};

// Exports
export { useTheme, useToggleTheme };
export default ThemeContextProvider;
