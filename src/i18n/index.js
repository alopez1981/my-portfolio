import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";

export const SUPPORTED_LOCALES = ["en", "es"];
const STORAGE_KEY = "portfolio-locale";

function detectInitialLocale() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored && SUPPORTED_LOCALES.includes(stored) ? stored : "en";
}

const i18n = createI18n({
  legacy: false,
  locale: detectInitialLocale(),
  fallbackLocale: "en",
  messages: { en, es },
});

export function setLocale(locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) return;
  i18n.global.locale.value = locale;
  window.localStorage.setItem(STORAGE_KEY, locale);
  document.documentElement.setAttribute("lang", locale);
}

export default i18n;
