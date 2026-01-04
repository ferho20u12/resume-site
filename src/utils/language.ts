import {AGE_TEMPLATES, DEFAULT_LANGUAGE} from "@src/configuration/languages.config"

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

export function calculateAge(birthDate: Date) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function formatAge(lang: string, age: number) {
  const template = AGE_TEMPLATES[lang] || AGE_TEMPLATES[DEFAULT_LANGUAGE];
  return template.replace("$d", age.toString());
}
