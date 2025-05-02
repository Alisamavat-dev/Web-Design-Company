import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const JSONBIN_BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;
const JSONBIN_MASTER_KEY = import.meta.env.VITE_JSONBIN_MASTER_KEY;

const savedLanguage = localStorage.getItem("i18nextLng") || "fa";

const loadTranslations = async (language) => {
  try {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`,
      {
        headers: {
          "X-Master-Key": JSONBIN_MASTER_KEY,
          "X-Bin-Meta": false,
        },
      }
    );

    const data = await response.json();
    return data[language];
  } catch (error) {
    console.error("Error loading translations:", error);
    return null;
  }
};

i18n.use(initReactI18next).init({
  lng: savedLanguage,
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "https://api.jsonbin.io/v3/b/" + JSONBIN_BIN_ID,
    request: async (options, url, payload, callback) => {
      try {
        const language = url.split("/").pop();
        const data = await loadTranslations(language);
        callback(null, {
          data: JSON.stringify(data),
          status: 200,
        });
      } catch (e) {
        console.error("Error in i18n backend:", e);
        callback(e, null);
      }
    },
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);

  document.dir = lng === "fa" ? "rtl" : "ltr";
});

export default i18n;
