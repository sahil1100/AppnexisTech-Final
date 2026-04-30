import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "../theme/theme";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = window.localStorage.getItem("appnexis-theme");

    if (savedTheme === "light") {
      setDarkMode(false);
    } else if (savedTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("appnexis-theme", darkMode ? "dark" : "light");
  }, [darkMode, mounted]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const muiTheme = getTheme(darkMode ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
