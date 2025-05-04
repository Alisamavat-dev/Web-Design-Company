import React, { useMemo, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import Icon from "../../Icons";
import { fetchBanner } from "../../../api/Home/Banner/bannerApi";

const Banner = () => {
  const { i18n } = useTranslation();
  const {
    data: bannerData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Banner", i18n.language],
    queryFn: () => fetchBanner(i18n.language),
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
    <div className="relative w-full pt-12 lg:pt-20 md:pt-12 xl:pt-25 pb-8 md:pb-12 overflow-hidden">
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

            <div className="grid grid-cols-2 gap-4 mt-6">
              {bannerData?.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400">
                    <Icon name={feature.icon} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">
                      {feature.title}
                    </span>
                    <span className="text-xs text-slate-400">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href={bannerData?.cta?.primary?.href}
                title={bannerData?.cta?.primary?.title}
                className="group relative inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base md:text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon name={bannerData?.cta?.primary?.icon} />
                  {bannerData?.cta?.primary?.title}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>

              <a
                href={bannerData?.cta?.secondary?.href}
                title={bannerData?.cta?.secondary?.title}
                className="group relative inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-white/5 backdrop-blur-xl text-white font-bold text-base md:text-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon name={bannerData?.cta?.secondary?.icon} />
                  {bannerData?.cta?.secondary?.title}
                </span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 animate-slide-in-left">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:-inset-6 opacity-75"></div>
              {bannerData?.image && (
                <img
                  src={bannerData.image?.src || bannerData.image}
                  alt={bannerData.image?.alt || bannerData.title}
                  title={bannerData.image?.title || bannerData.title}
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
