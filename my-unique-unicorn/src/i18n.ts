import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

export const i18n = createI18n({
  locale: "zh", // default language
  fallbackLocale: "zh",
  legacy: false,
  globalInjection: true,
  messages: { zh, en },
});
