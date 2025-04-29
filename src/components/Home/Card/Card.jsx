import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

const Card = () => {

  const JSONBIN_BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;
  const JSONBIN_API_KEY = import.meta.env.VITE_JSONBIN_API_KEY;

  const {
    data: cards,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Card"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`,
        {
          headers: {
            "X-Access-Key": JSONBIN_API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات کارت‌ها");
      }

      const data = await response.json();
      return data.record.Card;
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[60vh] bg-gradient-to-b from-gray-900 to-gray-800">
        <AiOutlineLoading3Quarters
          size={44}
          className="animate-spin text-yellow-400"
        />
        <span className="mr-3 text-yellow-400 text-lg animate-pulse">
          در حال دریافت اطلاعات...
        </span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] bg-gradient-to-b from-gray-900 to-gray-800 p-6 text-center">
        <p className="text-red-400 text-xl mb-4">خطا در دریافت اطلاعات</p>
        <p className="text-gray-300">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-yellow-500 text-gray-900 rounded-full font-bold hover:bg-yellow-400 transition-colors"
        >
          تلاش مجدد
        </button>
      </div>
    );
  }

  return (
    <div className=" pb-16">
      <div className="container mx-auto">
        <h2 className="text-right px-6 py-8 text-3xl sm:text-4xl font-bold text-yellow-400 border-b-2 border-yellow-400/50 max-w-7xl mx-auto">
          چرا رایانیتا انتخاب کنیم؟
        </h2>

        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards?.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-yellow-400/20 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-yellow-400 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-lg font-bold text-yellow-400 mb-3 text-center w-full">
                {item.title}
              </h3>

              <div className="w-16 h-1 bg-yellow-400 mb-4 rounded-full group-hover:w-24 transition-all duration-300"></div>

              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
