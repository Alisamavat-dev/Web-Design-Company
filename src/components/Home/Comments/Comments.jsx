import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import StarRating from "./StarRating";
import { fetchComments } from "../../../api/Home/Comments/commentsApi";

const Comments = () => {
  const { i18n } = useTranslation();
  const {
    data: commentsData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Comments", i18n.language],
    queryFn: () => fetchComments(i18n.language),
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
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
      <div className="flex justify-center items-center h-[60vh]">
        <div className="bg-red-500/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-500/20">
          <p className="text-red-400">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-transparent max-w-[1340px] mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 mb-8 text-center border-b border-blue-500/20 max-w-4xl mx-auto">
        {i18n.language === "fa"
          ? "نظرات مشتریان درباره سرویس‌دهی"
          : "Customer Reviews"}
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12"
      >
        {commentsData?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center text-center border border-white/10 shadow-lg h-full mx-2">
              <img
                src={item.image}
                alt={item.title}
                title={item.title}
                className="w-20 h-20 object-cover rounded-full border-2 border-blue-400/30 shadow-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-lg font-bold text-blue-400 mb-1">
                {item.title}
              </h3>
              <StarRating rating={item.rating || 5} />
              <p className="text-slate-300/90 text-sm leading-relaxed mb-2">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comments;
