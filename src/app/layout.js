"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "../theme/theme";
import "./globals.css";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function RootLayout({ children }) {
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
    <html lang="en" className={`${darkMode ? "dark" : ""} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Core Meta Tags */}
        <title>AppNexis | Managed IT Services & App Development</title>
        <meta name="description" content="Launch your app or website without the tech stress. AppNexis provides premium development, managed hosting, and enterprise-grade infrastructure on a simple yearly plan." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="author" content="AppNexis Tech" />
        <meta name="keywords" content="App Development, Web Development, Managed Hosting, IT Services, SaaS Infrastructure, Mobile Apps India, Enterprise IT" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://appnexis.tech/" />
        <meta property="og:title" content="AppNexis | The Managed Development Platform" />
        <meta property="og:description" content="We build, host, and launch your professional digital products so you can focus on growth." />
        <meta property="og:image" content="/about-tech.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="AppNexis | Managed IT Services" />
        <meta property="twitter:description" content="Enterprise-grade development & hosting on a fixed yearly model." />

        {/* Favicon */}
        <link rel="icon" href="/IMG_9561.PNG" />
        <meta name="theme-color" content={darkMode ? "#020617" : "#ffffff"} />
      </head>
      <body className="antialiased">
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
          </ThemeProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
