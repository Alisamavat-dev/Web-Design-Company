import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const LanguageSwitcher = ({ className = "", variant = "default" }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
  };

  const getButtonStyle = () => {
    const baseStyle =
      "flex items-center gap-2 transition-all duration-300 font-medium";

    switch (variant) {
      case "mobile":
        return `${baseStyle} px-3 py-2 rounded-xl bg-slate-800/40 text-slate-200 hover:text-blue-400 hover:bg-slate-700/50 text-sm`;
      case "desktop":
        return `${baseStyle} px-6 py-2 rounded-xl bg-slate-800/60 text-slate-200 hover:text-blue-400 hover:bg-slate-700/50 text-sm border border-slate-700/50 hover:border-blue-500/30 w-[130px]`;
      default:
        return `${baseStyle} `;
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`${getButtonStyle()} ${className} group`}
      aria-label={
        i18n.language === "fa"
          ? "تغییر زبان به انگلیسی"
          : "Change language to Persian"
      }
    >
      <IoLanguage className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" />
      <span>{i18n.language === "fa" ? "English" : "Persin"}</span>
    </button>
  );
};

export default LanguageSwitcher;
