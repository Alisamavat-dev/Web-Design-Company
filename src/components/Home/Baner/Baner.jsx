import React from "react";
import { FaUsers, FaCode, FaLaptopCode } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { i18n } = useTranslation();
  const {
    data: bannerData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Banner", i18n.language],
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
        throw new Error("خطا در دریافت اطلاعات بنر");
      }

      const data = await response.json();
      return data.record[i18n.language].translation.Banner;
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
    <div className="relative w-full pt-8 lg:pt-20 md:pt-12 xl:pt-25 pb-8 md:pb-12 overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 text-right order-2 lg:order-1 justify-center animate-slide-in-right">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 leading-tight">
                {bannerData?.title}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                {bannerData?.subtitle}
              </h2>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-slate-300/90 leading-relaxed">
              {bannerData?.description}
            </p>

            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl px-4 md:px-6 py-3 md:py-4 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors shadow-lg hover:shadow-blue-500/10">
                <span className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-xl bg-blue-500/10 text-blue-400">
                  <FaUsers className="text-xl md:text-2xl" />
                </span>
                <span className="text-sm md:text-base lg:text-lg text-slate-200">
                  {bannerData?.stats?.users}
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl px-4 md:px-6 py-3 md:py-4 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors shadow-lg hover:shadow-purple-500/10">
                <span className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-xl bg-purple-500/10 text-purple-400">
                  <FaCode className="text-xl md:text-2xl" />
                </span>
                <span className="text-sm md:text-base lg:text-lg text-slate-200">
                  {bannerData?.stats?.languages}
                </span>
              </div>
            </div>

            <a
              href="join"
              title={bannerData?.button?.title}
              className="self-end lg:self-start mt-2 md:mt-4 group relative inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base md:text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaLaptopCode className="text-lg md:text-xl" />
                {bannerData?.button?.title}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 animate-slide-in-left">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:-inset-6 opacity-75"></div>
              {bannerData?.image && (
                <img
                  src={bannerData.image}
                  alt={bannerData?.title}
                  title={bannerData?.title}
                  className="relative w-full rounded-2xl shadow-2xl object-cover border border-white/10 transform rotate-1 hover:rotate-0 transition-all duration-500 max-h-[300px] md:max-h-[400px] object-center group-hover:border-blue-500/30"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
