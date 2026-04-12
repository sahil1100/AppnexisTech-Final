import { createTheme } from "@mui/material/styles";

export function getTheme(mode = "dark") {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#00ADB5",
        light: "#00CED1",
        dark: "#008B8B",
      },
      secondary: {
        main: "#FF6B6B",
      },
      background: {
        default: isDark ? "#0F172A" : "#F8FAFC",
        paper: isDark ? "#1E293B" : "#FFFFFF",
      },
      text: {
        primary: isDark ? "#F8FAFC" : "#0F172A",
        secondary: isDark ? "#94A3B8" : "#475569",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: "3.5rem",
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 700,
        fontSize: "2.5rem",
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: "2rem",
        lineHeight: 1.4,
      },
      h6: {
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            padding: "12px 32px",
            fontSize: "1rem",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  });
}
