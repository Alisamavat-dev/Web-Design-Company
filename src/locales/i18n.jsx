import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useState, useEffect } from "react";

const JSONBIN_BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;
const JSONBIN_MASTER_KEY = import.meta.env.VITE_JSONBIN_MASTER_KEY;


export const LoadingTranslations = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    <span className="mr-3 text-slate-200">در حال بارگذاری ترجمه‌ها...</span>
  </div>
);


export const TranslationError = ({ error }) => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-red-500/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-500/20">
      <p className="text-red-400">خطا در بارگذاری ترجمه‌ها: {error.message}</p>
    </div>
  </div>
);


export const useTranslationLoader = (language) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`,
          {
            method: "GET",
            headers: {
              "X-Master-Key": JSONBIN_MASTER_KEY,
              "X-Bin-Meta": false,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data[language]?.translation) {
          throw new Error(`Translation for ${language} not found`);
        }

        // Update i18n instance with new translations
        await i18n.changeLanguage(language);
        i18n.addResourceBundle(
          language,
          "translation",
          data[language].translation,
          true,
          true
        );

        setError(null);
      } catch (err) {
        console.error("Translation loading error:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  return { isLoading, error };
};

// Initialize i18next
i18n.use(initReactI18next).init({
  lng: "fa", // default language
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
    bindI18n: "languageChanged",
    bindI18nStore: "added",
  },
});

// Provider component for translations
export const TranslationProvider = ({ children }) => {
  const { isLoading, error } = useTranslationLoader(i18n.language);

  if (isLoading) return <LoadingTranslations />;
  if (error) return <TranslationError error={error} />;

  return children;
};

export default i18n;
