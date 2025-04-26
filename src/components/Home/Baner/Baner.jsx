import React from "react";
import { FaMedal } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const {
    data: Baner,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Baner"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/Baner");
      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات برندها");
      }
      return response.json();
    },
  });

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
    <div className="w-full py-12 md:py-16 lg:py-20  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 md:gap-6 text-right order-2 lg:order-1 justify-center animate-slide-in-right">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              سفارش طراحی سایت - تضمین بهترین کیفیت
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-yellow-400 font-semibold">
              با طراحی سایت حرفه‌ای کسب و کار خود را رشد دهید!
            </h2>
            <p className="text-base md:text-lg text-slate-200/90">
              سفارش طراحی سایت و توسعه انواع پلتفرم متناسب با نیاز شما
            </p>

            <div className="flex items-center gap-3 bg-slate-100/80 backdrop-blur-sm px-4 py-3 rounded-lg text-sky-700 font-medium text-sm sm:text-base w-full lg:w-auto shadow-md">
              <span className="relative flex h-6 w-6">
                <FaMedal className="text-yellow-500 text-xl sm:text-2xl animate-pulse" />
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-30"></span>
              </span>
              <span className="text-sm sm:text-base">
                کسب مقام برتر توسعه وب سایت مجموعه رقابت‌های تخصصی فن‌آورد در
                سطح ملی
              </span>
            </div>

            <a
              href="#order"
              className="self-end lg:self-start mt-2 sm:mt-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-extrabold shadow-lg hover:shadow-2xl transition-all hover:scale-[1.04] hover:from-yellow-300 hover:to-yellow-400 border-2 border-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              سفارش طراحی سایت
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 animate-slide-in-left">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-2 sm:-inset-3 bg-yellow-400/20 rounded-2xl -z-10 blur-sm"></div>
              {Baner && Baner[0]?.image && (
                <img
                  src={Baner[0].image}
                  alt="مدال افتخار"
                  className="w-full rounded-2xl shadow-2xl object-cover border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300 max-h-[400px] object-center"
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
