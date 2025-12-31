// utils/theme.ts
export function setPreferredTheme(theme: string) {
  localStorage.setItem('theme', theme);
  document.cookie = `theme=${theme}; path=/;`;

  // Aplicar el tema al document
  const themeToApply = theme === "system"
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : theme;

  document.documentElement.setAttribute("data-theme", themeToApply);
}

export function getPreferredTheme(): string {
  if (typeof window === "undefined") return "system";

  return (
    (localStorage.getItem("theme") as string) ||
    (document.cookie.replace(
      /(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    ) as string) ||
    "system"
  );
}
