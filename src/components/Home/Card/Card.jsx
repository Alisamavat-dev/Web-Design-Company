import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

const Card = () => {
  const {
    data: cards,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Card"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/Card");
      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات کارت‌ها");
      }
      return response.json();
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[60vh] bg-gray-900">
        <AiOutlineLoading3Quarters
          size={44}
          className="animate-spin text-gray-400"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[60vh] bg-gray-900">
        <p className="text-red-400">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {cards?.map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col items-center text-center hover:shadow-2xl transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-yellow-300 shadow"
            loading="lazy"
          />
          <h3 className="text-lg font-bold text-yellow-300 mb-2">
            {item.title}
          </h3>
          <p className="text-white text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
