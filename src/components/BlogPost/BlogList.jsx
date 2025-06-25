import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { fetchBlogPosts } from "../../api/BlogPost/BlogPost";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const BlogList = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "fa";

  const {
    data: blogPosts,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["Blog", lang],
    queryFn: () => fetchBlogPosts(lang),
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  let posts = [];
  if (Array.isArray(blogPosts) && Array.isArray(blogPosts[0])) {
    posts = blogPosts[0];
  } else if (Array.isArray(blogPosts)) {
    posts = blogPosts;
  }

  if (isPending) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <AiOutlineLoading3Quarters
          size={44}
          className="animate-spin text-blue-400"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="text-red-500">
          {error?.message || (lang === "fa" ? "خطا در دریافت مقالات" : "Error fetching posts")}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={post.image?.src || post.image}
            alt={post.title}
            className="h-48 w-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x400";
            }}
          />
          <div className="p-5 flex-1 flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-white line-clamp-2">
              {post.title}
            </h2>
            <p className="text-slate-300 mb-4 text-sm sm:text-base line-clamp-3">
              {post.excerpt}
            </p>
            <Link
              to={`/blog/${post.id}`}
              className="mt-auto inline-block bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {lang === "fa" ? "مشاهده مقاله" : "Read Article"}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
