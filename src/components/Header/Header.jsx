import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../locales/LanguageSwitcher";
import { fetchHeader } from "../../api/Header/headerApi";
import {
  FaHome,
  FaPlusCircle,
  FaUsers,
  FaCreditCard,
  FaImages,
  FaQuestionCircle,
  FaPhone,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const {
    data: header,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Header", i18n.language],
    queryFn: () => fetchHeader(i18n.language),
  });

  const getIconComponent = (iconName) => {
    const icons = {
      home: FaHome,
      "plus-circle": FaPlusCircle,
      users: FaUsers,
      "credit-card": FaCreditCard,
      collection: FaImages,
      "question-circle": FaQuestionCircle,
      phone: FaPhone,
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="text-lg" /> : null;
  };

  const logoItem = header?.find((item) => item.logo);
  const menuItems = header?.filter((item) => item.title && item.href);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="relative">
          <AiOutlineLoading3Quarters
            size={44}
            className="animate-spin text-blue-400"
          />
          <div className="absolute inset-0 blur-xl bg-blue-500/20 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-red-500/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-500/20">
          <p className="text-red-400">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden xl:flex justify-center items-center py-3 fixed top-0 z-30 w-full">
        <div className="container mx-auto w-full max-w-screen-xl bg-slate-900/90 rounded-3xl shadow-2xl px-4 md:px-8 py-4 flex items-center justify-between border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center min-w-[80px]">
            <a
              href={logoItem?.href}
              title={logoItem?.logo?.title || logoItem?.title || "صفحه اصلی"}
            >
              <img
                src={logoItem?.logo?.src || logoItem?.logo}
                alt={logoItem?.logo?.alt || logoItem?.title}
                title={logoItem?.logo?.title || logoItem?.title}
                className="h-13 w-auto transition-transform duration-200 hover:scale-105 hover:drop-shadow-lg cursor-pointer"
                loading="lazy"
              />
            </a>
          </div>
          <nav className="flex-1 min-w-0">
            <ul className="flex gap-3 md:gap-5 lg:gap-7 text-slate-200 font-medium text-sm justify-center overflow-x-auto scrollbar-thumb-slate-700 scrollbar-track-slate-900 whitespace-nowrap">
              {menuItems?.map((item) => (
                <li key={item.href} className="truncate max-w-[120px]">
                  <a
                    href={item.href}
                    title={item.description || item.title}
                    className="whitespace-nowrap hover:text-blue-400 transition-colors duration-200 px-2 md:px-3 py-1 rounded-lg hover:bg-slate-800/60 text-ellipsis text-sm flex items-center gap-2"
                  >
                    {getIconComponent(item.icon)}
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-medium bg-blue-500/10 text-blue-400 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center">
            <LanguageSwitcher variant="desktop" />
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="header-mobile block xl:hidden fixed top-0 z-40 w-full p-2">
        <div className="container mx-auto w-full bg-slate-900/90 rounded-3xl shadow-2xl px-4 py-3 flex items-center justify-between border border-slate-700/50 backdrop-blur-sm mt-2">
          <div className="flex items-center gap-2 min-w-[60px]">
            <a
              href={logoItem?.href}
              title={logoItem?.logo?.title || logoItem?.title || "صفحه اصلی"}
            >
              <img
                src={logoItem?.logo?.src || logoItem?.logo}
                alt={logoItem?.logo?.alt || logoItem?.title}
                title={logoItem?.logo?.title || logoItem?.title}
                className="h-13 w-auto transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg cursor-pointer"
                loading="lazy"
              />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher variant="mobile" />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-slate-200 focus:outline-none p-2 rounded-full hover:bg-slate-800/40 transition-all duration-200 shadow-md"
              aria-label={i18n.language === "fa" ? "باز کردن منو" : "Open Menu"}
              style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.12)" }}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <div
          className={`fixed left-0 right-0 top-[72px] w-full max-w-3xl mx-auto transition-all duration-400 overflow-hidden z-50 ${
            menuOpen
              ? "max-h-[600px] opacity-100 translate-y-0 pointer-events-auto"
              : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.22)" }}
        >
          <div className="bg-slate-900/90 rounded-3xl shadow-2xl p-6 mx-4 mt-3 w-auto flex flex-col gap-4 text-center border border-slate-700/50 backdrop-blur-sm">
            {menuItems?.map((item) => (
              <a
                key={item.href}
                href={item.href}
                title={item.description || item.title}
                className="text-base font-semibold text-slate-200 hover:text-blue-400 transition-colors duration-200 px-4 py-3 rounded-xl hover:bg-slate-800/60 shadow-sm tracking-wide mx-2 flex items-center justify-center gap-2"
                style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.08)" }}
                onClick={() => setMenuOpen(false)}
              >
                {getIconComponent(item.icon)}
                <span>{item.title}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-medium bg-blue-500/10 text-blue-400 rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="h-[60px] w-full" />
      </header>
    </>
  );
};

export default Header;
