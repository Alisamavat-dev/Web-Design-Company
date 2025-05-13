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
    queryFn: () => fetchBlogPosts(i18n.language),
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
          {error?.message || "خطا در دریافت مقالات"}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={post.image?.src || post.image}
            alt={post.title}
            className="h-48 w-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x400";
            }}
          />
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-500 mb-4 line-clamp-3">{post.excerpt}</p>
            <Link
              to={`/blog/${post.id}`}
              className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              مشاهده مقاله
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
