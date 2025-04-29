import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    data: header,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Header"],
    queryFn: async () => {
      const response = await fetch(`https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSONBIN_BIN_ID}`, {
      });
      
      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات هدر");
      }
      
      const data = await response.json();
      return data.record.Header;
    },
  });

  const logoItem = header?.find((item) => item.logo);
  const menuItems = header?.filter((item) => item.title && item.href);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[80vh] bg-gray-900">
        <AiOutlineLoading3Quarters
          size={44}
          className="animate-spin text-gray-400"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[80vh] bg-gray-900">
        <p className="text-red-400">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden xl:flex justify-center items-center py-3 relative z-30 w-full">
        <div className="container mx-auto w-full max-w-screen-xl bg-gray-800/80 rounded-3xl shadow-2xl px-4 md:px-8 py-4 flex items-center justify-between border border-gray-700">
          <div className="flex items-center gap-3 min-w-[80px] ml-10">
            <img
              src={logoItem.logo}
              alt={logoItem.title}
              title={logoItem.title}
              className="h-10 w-auto transition-transform duration-200 hover:scale-105 hover:drop-shadow-lg cursor-pointer"
              loading="lazy"
            />
          </div>
          <nav className="flex-1 min-w-0">
            <ul className="flex gap-3 md:gap-5 lg:gap-7 text-gray-100 font-medium text-sm justify-center overflow-x-auto  scrollbar-thumb-gray-700 scrollbar-track-gray-900 whitespace-nowrap">
              {menuItems?.map((item) => (
                <li key={item.href} className="truncate max-w-[120px]">
                  <a
                    href={item.href}
                    title={item.title}
                    className="whitespace-nowrap hover:text-blue-300 transition-colors duration-200 px-2 md:px-3 py-1 rounded-lg hover:bg-gray-700/60 block text-ellipsis  text-sm"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className=" md:ml-10 mt-2 md:mt-0 mr-10">
            <button className="flex items-center justify-center bg-gray-200 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 md:px-6 rounded-xl shadow-lg transition-all duration-200 min-w-[120px] md:min-w-[140px] text-sm">
              درخواست مشاور
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="header-mobile block xl:hidden fixed z-40 w-full p-2">
        <div className="container mx-auto w-full bg-gray-800/90 rounded-3xl shadow-2xl px-4 py-3 flex items-center justify-between border-x border-b border-gray-700 mt-2">
          <div className="flex items-center gap-2 min-w-[60px]">
            <img
              src={logoItem.logo}
              alt={logoItem.title}
              title={logoItem.title}
              className="h-9 w-auto transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg cursor-pointer"
              loading="lazy"
            />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-100 focus:outline-none p-2 rounded-full hover:bg-gray-700/40 transition-all duration-200 shadow-md"
            aria-label="باز کردن منو"
            style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.12)" }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div
          className={`fixed left-0 right-0 top-[72px] w-full max-w-3xl mx-auto transition-all duration-400 overflow-hidden z-50 ${
            menuOpen
              ? "max-h-[600px] opacity-100 translate-y-0 pointer-events-auto"
              : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.22)" }}
        >
          <div className="bg-gray-800/90 rounded-3xl shadow-2xl p-6 mx-4 mt-3 w-auto flex flex-col gap-4 text-center border-x border-b border-gray-700">
            {menuItems?.map((item) => (
              <a
                key={item.href}
                href={item.href}
                title={item.title}
                className="text-base font-semibold text-gray-100 hover:text-blue-400 transition-colors duration-200 px-4 py-3 rounded-xl hover:bg-blue-900/30 shadow-sm tracking-wide mx-2"
                style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.08)" }}
                onClick={() => setMenuOpen(false)}
              >
              </a>
            ))}

            <button className="mt-2 flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-7 rounded-2xl shadow-lg transition-all duration-200 min-w-[160px] text-base tracking-wide mx-auto">
              درخواست مشاور
            </button>
          </div>
        </div>

        <div className="h-[60px] w-full" />
      </header>
    </>
  );
};

export default Header;
