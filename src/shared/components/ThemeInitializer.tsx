'use client';
import { useEffect } from "react";

export function ThemeInitializer({ initialTheme }: { initialTheme: string }) {
  useEffect(() => {
    if (initialTheme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? "dark" : "light");
    } else {
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, [initialTheme]);

  return null;
}
