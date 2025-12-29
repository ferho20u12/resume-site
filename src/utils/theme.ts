// utils/theme.ts
export function setPreferredTheme(theme: "light" | "dark" | "system") {
  localStorage.setItem('theme', theme);
  document.cookie = `theme=${theme}; path=/;`;

  // Aplicar el tema al document
  const themeToApply = theme === "system"
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : theme;

  document.documentElement.setAttribute("data-theme", themeToApply);
}

export function getPreferredTheme(): "light" | "dark" | "system" {
  return (localStorage.getItem('theme') as "light" | "dark" | "system")
    || (document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1") as "light" | "dark" | "system")
    || "system";
}
