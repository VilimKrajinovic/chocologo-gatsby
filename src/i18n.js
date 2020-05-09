import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translation: require("../src/localization/en/translate.json"),
      },
      hr: {
        translation: require("../src/localization/hr/translate.json"),
      },
    },
    fallbackLng: "en",
    lng: "en",
    debug: true,

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ",",
    },

    react: {
      wait: true,
    },
  })

export default i18n
