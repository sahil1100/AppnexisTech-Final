"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme/theme";
import "./globals.css";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <head>
        <title>AppNexis - Premium IT Services</title>
        <meta name="description" content="We build, host, and launch your professional digital products. Mobile apps, web platforms, and more." />
      </head>
      <body>
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
