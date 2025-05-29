import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import getRandomizedPosts from "./Random/Random";
import { useTranslation } from "react-i18next";
import { fetchBlogPosts } from "../../../api/Home/Blog/blogApi";
const Blog = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "fa";
  const {
    data: blogPosts,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Blog", lang],
    queryFn: () => fetchBlogPosts(i18n.language),
  });

  const posts = useMemo(() => {
    if (Array.isArray(blogPosts) && Array.isArray(blogPosts[0])) {
      return blogPosts[0];
    }
    return blogPosts || [];
  }, [blogPosts]);

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
          <p className="text-red-400">
            {t("blog.error", lang === "fa" ? "خطا:" : "Error:")} {error.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 max-w-[1360px] mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 mb-8 text-center border-b border-blue-500/20 max-w-4xl mx-auto">
        {t("blog.title", lang === "fa" ? "بلاگ" : "Blog")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {getRandomizedPosts(posts, 3).map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center text-center border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg overflow-hidden"
            title={post.title}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-full mb-4 h-40 sm:h-44 md:h-48">
              <img
                src={post.image?.src || post.image}
                alt={post.image?.alt || post.title}
                title={post.image?.title || post.title}
                className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-white/10 group-hover:border-blue-500/50 shadow-lg transition-all duration-300 z-10"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />
              <div className="absolute top-0 right-0 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-bl-xl text-xs sm:text-sm font-semibold shadow-md">
                {post.category ||
                  (lang === "fa" ? "دسته‌بندی نشده" : "Uncategorized")}
              </div>
            </div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-slate-300/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 mb-4 line-clamp-2 sm:line-clamp-3 flex-grow">
              {post.excerpt ||
                (lang === "fa" ? "بدون توضیحات" : "No description")}
            </p>
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 w-full mt-auto">
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-blue-400" />
                <span>
                  {post.date ||
                    (lang === "fa" ? "تاریخ نامشخص" : "Unknown date")}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaUser className="text-purple-400" />
                <span className="truncate max-w-[100px]">
                  {post.author ||
                    (lang === "fa" ? "نویسنده نامشخص" : "Unknown author")}
                </span>
              </div>
            </div>
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;