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
    <div>
      <title>طراحی سایت حرفه‌ای و توسعه انواع پلتفرم متناسب با نیاز شما</title>
      <meta name="description" content="طراحی سایت حرفه‌ای و توسعه انواع پلتفرم متناسب با نیاز شما" />
      <meta name="keywords" content="طراحی سایت, توسعه وب, طراحی سایت حرفه‌ای, طراحی سایت وب, طراحی سایت وب حرفه‌ای, طراحی سایت وب حرفه‌ای, طراحی سایت وب حرفه‌ای, طراحی سایت وب حرفه‌ای" />
      <meta name="author" content="رایانیتا" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </div>
  );
};

export default Card;
