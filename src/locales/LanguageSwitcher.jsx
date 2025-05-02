import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const buttonStyles = {
  base: "flex items-center gap-2 transition-all duration-300 font-medium",
  mobile:
    "px-3 py-2 rounded-xl bg-slate-800/40 text-slate-200 hover:text-blue-400 hover:bg-slate-700/50 text-sm",
  desktop:
    "px-6 py-1 rounded-xl bg-slate-800/60 text-slate-200 hover:text-blue-400 hover:bg-slate-700/50 text-base border border-slate-700/50 hover:border-blue-500/30 min-w-[130px]",
};

const LanguageSwitcher = ({ className = "", variant = "desktop" }) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    const newLang = isEnglish ? "fa" : "en";
    i18n.changeLanguage(newLang);
  };

  const buttonStyle = `${buttonStyles.base} ${buttonStyles[variant]} ${className} group`;

  return (
    <button
      onClick={toggleLanguage}
      className={buttonStyle}
      aria-label={
        isEnglish ? "Change language to Persian" : "تغییر زبان به انگلیسی"
      }
    >
      <IoLanguage className="text-xl opacity-80 group-hover:opacity-100 transition-opacity" />
      <span>{isEnglish ? "Persian" : "English"}</span>
    </button>
  );
};

export default LanguageSwitcher;
