import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const Card = () => {
  const { i18n } = useTranslation();
  const {
    data: cardData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Card", i18n.language],
    queryFn: async () => {
      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSONBIN_BIN_ID}`,
        {
          headers: {
            "X-Master-Key": import.meta.env.VITE_JSONBIN_MASTER_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات کارت");
      }

      const data = await response.json();
      return data.record[i18n.language].translation.Card;
    },
  });

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
    <div className="pb-16">
      <div className="container mx-auto relative">
        <h2 className="text-right px-6 py-8 text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 max-w-7xl mx-auto border-b border-blue-500/20">
          {i18n.language === "fa" ? "چرا به ما بپیوندید؟" : "Why Join Us?"}
        </h2>

        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cardData?.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center text-center border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  className="w-20 h-20 object-cover rounded-full border-2 border-white/10 group-hover:border-blue-500/50 shadow-lg transition-all duration-300 relative z-10"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                {item.title}
              </h3>

              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:w-24 transition-all duration-300 opacity-50 group-hover:opacity-100"></div>

              <p className="text-slate-300/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                {item.description}
              </p>

              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
