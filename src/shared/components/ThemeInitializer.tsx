'use client';
import { useEffect } from "react";

export default function ThemeInitializer() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "system";

    const themeToApply = storedTheme === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : storedTheme;

    document.documentElement.setAttribute("data-theme", themeToApply);
  }, []);

  return null;
}
