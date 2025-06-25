import { useState, useMemo } from "react";
import { FaSearch, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Search from "./search";
import SEO from "./SEO/SEO";
import { fetchAllBlog, fetchAllBlogSEO } from "../../api/AllBlog/AllBlog";

const AllBlog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { i18n } = useTranslation();
  const lang = i18n.language || "fa";

  const {
    data: blogPosts,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Blog", i18n.language],
    queryFn: () => fetchAllBlog(i18n.language),
  });

  const {
    data: seoData,
    isPending: isSeoPending,
    isError: isSeoError,
    error: seoError,
  } = useQuery({
    queryKey: ["SEO", i18n.language],
    queryFn: () => fetchAllBlogSEO(i18n.language),
  });

  const posts = useMemo(() => {
    return blogPosts?.posts || [];
  }, [blogPosts]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SEO
        title={seoData?.blog?.title}
        description={seoData?.blog?.description}
        keywords={seoData?.blog?.keywords}
        author={seoData?.blog?.author}
        ogTitle={seoData?.blog?.title}
      />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        lang={lang}
      />
      <div className="mx-12 mt-[-50px] my-6 flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 rounded-2xl p-6 shadow-lg">
        <span className="text-2xl md:text-3xl font-extrabold flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          <FaSearch className="text-blue-400 text-3xl drop-shadow" />
          به وبلاگ تخصصی واونیکس خوش آمدید!
        </span>
        <p className="text-slate-200 mt-2 text-center max-w-xl">
          جدیدترین مقالات آموزش طراحی سایت، سئو، برنامه‌نویسی و تکنولوژی روز را
          اینجا بخوانید. برای جستجوی سریع‌تر، از کادر بالا استفاده کنید یا در
          دسته‌بندی‌ها کاوش کنید.
        </p>
        <Link
          to="/"
          className="mt-3 inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-7 rounded-lg shadow-lg transition-all duration-200"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
      {isPending ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <AiOutlineLoading3Quarters
            size={44}
            className="animate-spin text-blue-400"
          />
        </div>
      ) : isError ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-red-500">Error: {error.message}</p>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {lang === "fa" ? "مقاله‌ای یافت نشد" : "No articles found"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
          {filteredPosts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center text-center border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-full mb-4 h-40 sm:h-44 md:h-48">
                <img
                  src={post.image?.src || post.image}
                  alt={post.image?.alt || post.title}
                  title={post.image?.title || post.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-white/10 group-hover:border-blue-500/50 shadow-lg transition-all duration-300 z-10"
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
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 line-clamp-2">
                {post.title}
              </h2>
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
      )}
    </div>
  );
};

export default AllBlog;
