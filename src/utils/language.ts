export function setPreferredLang(lang: string) {
  localStorage.setItem('lang', lang);
  document.cookie = `lang=${lang}; path=/;`;
  window.location.href = window.location.pathname; // recarga todo
}

export function getPreferredLang(): string {
  if (typeof window === "undefined") return "en"; // default en server
  return localStorage.getItem("lang")
    || document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    || "en";
}
