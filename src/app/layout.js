"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "../theme/theme";
import "./globals.css";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function getInitialDarkMode() {
  if (typeof window === "undefined") {
    return true;
  }

  const savedTheme = window.localStorage.getItem("appnexis-theme");

  if (savedTheme === "light") {
    return false;
  }

  if (savedTheme === "dark") {
    return true;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.localStorage.setItem("appnexis-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const muiTheme = getTheme(darkMode ? "dark" : "light");

  return (
    <html lang="en" className={darkMode ? "dark" : ""} suppressHydrationWarning>
      <head>
        <title>AppNexis - Premium IT Services</title>
        <meta name="description" content="We build, host, and launch your professional digital products. Mobile apps, web platforms, and more." />
      </head>
      <body>
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
