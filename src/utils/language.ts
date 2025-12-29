// utils/language.ts
export function setPreferredLang(lang: string) {
  localStorage.setItem('lang', lang);
  document.cookie = `lang=${lang}; path=/;`;
}

export function getPreferredLang() {
  return localStorage.getItem('lang') || document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1") || 'en';
}
