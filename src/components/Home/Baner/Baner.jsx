import React from "react";
import { FaUsers, FaCode, FaLaptopCode } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const {
    data: baner,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Baner"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSONBIN_BIN_ID}`,
        {}
      );

      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات بنر");
      }

      const data = await response.json();
      return data.record.Baner;
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
    <div className="relative w-full pt-12 xl:pt-32 pb-12 md:pb-16 overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-7 md:gap-8 text-right order-2 lg:order-1 justify-center animate-slide-in-right">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 leading-tight">
                پلتفرم تعاملی برنامه‌نویسان
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                همکاری در پروژه‌های نرم‌افزاری
              </h2>
            </div>

            <p className="text-lg md:text-xl text-slate-300/90 leading-relaxed">
              محیطی امن و حرفه‌ای برای تبادل دانش، همکاری در پروژه‌ها و رشد
              مهارت‌های برنامه‌نویسی
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors shadow-lg hover:shadow-blue-500/10">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400">
                  <FaUsers size={24} />
                </span>
                <span className="text-base sm:text-lg text-slate-200">
                  بیش از 1000 برنامه‌نویس فعال در پلتفرم
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors shadow-lg hover:shadow-purple-500/10">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400">
                  <FaCode size={24} />
                </span>
                <span className="text-base sm:text-lg text-slate-200">
                  پشتیبانی از تمامی زبان‌های برنامه‌نویسی
                </span>
              </div>
            </div>

            <a
              href="join"
              title="پیوستن به جامعه برنامه‌نویسان"
              className="self-end lg:self-start mt-4 group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaLaptopCode className="text-xl" />
                پیوستن به جامعه برنامه‌نویسان
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 animate-slide-in-left">
            <div className="relative w-full max-w-md lg:max-w-none group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:-inset-6 opacity-75"></div>
              {baner && baner[0]?.image && (
                <img
                  src={baner[0].image}
                  alt="همکاری برنامه‌نویسان"
                  title="همکاری برنامه‌نویسان"
                  className="relative w-full rounded-2xl shadow-2xl object-cover border border-white/10 transform rotate-1 hover:rotate-0 transition-all duration-500 max-h-[400px] object-center group-hover:border-blue-500/30"
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
