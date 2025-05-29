import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import SEO from "./SEO/SEO";
import { fetchBlogPosts } from "../../api/BlogPost/BlogPost";
import "../../index.css";
const BlogPost = () => {
  const { id } = useParams();
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

  let post = null;
  if (Array.isArray(blogPosts) && Array.isArray(blogPosts[0])) {
    post = blogPosts[0].find((p) => String(p.id) === String(id));
  } else if (Array.isArray(blogPosts)) {
    post = blogPosts.find((p) => String(p.id) === String(id));
  }

  let otherPosts = [];
  if (Array.isArray(blogPosts) && Array.isArray(blogPosts[0])) {
    otherPosts = blogPosts[0].filter((p) => String(p.id) !== String(id));
  } else if (Array.isArray(blogPosts)) {
    otherPosts = blogPosts.filter((p) => String(p.id) !== String(id));
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

  if (isError || !post) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="text-red-500">
          {error?.message ||
            (lang === "fa" ? "مقاله پیدا نشد" : "Post not found")}
        </p>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title={post.title}
        description={
          post.excerpt || (post.content ? post.content.slice(0, 160) : "")
        }
        keywords={[post.category, ...(post.tags || [])].join(", ")}
        author={post.author}
        ogTitle={post.title_en}
      />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center font-bold text-white border border-slate-700 bg-slate-800 rounded-lg shadow-sm px-5 py-2 transition-all duration-200 hover:bg-blue-600 hover:border-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FaArrowRight className="ml-2 text-blue-400 text-lg" />
            {lang === "fa" ? "بازگشت به لیست مقالات" : "Back to blog list"}
          </Link>
        </div>

        <article className="overflow-hidden mx-auto">
          <div className="relative h-[520px]">
            <img
              src={post.image?.src || post.image}
              alt={post.image?.alt || post.title}
              title={post.image?.title || post.title}
              className="max-w-5xl w-full h-[520px] object-cover mx-auto rounded-lg"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400";
              }}
            />
          </div>

          <div className="p-8 md:p-12">

            <div className="flex items-center text-gray-500 mb-8 justify-center">
              <div className="flex items-center ml-6">
                <FaCalendarAlt className="ml-2" />
                <span>
                  {post.date ||
                    (lang === "fa" ? "تاریخ نامشخص" : "Unknown date")}
                </span>
              </div>
              <div className="flex items-center">
                <FaUser className="ml-2" />
                <span>
                  {post.author ||
                    (lang === "fa" ? "نویسنده نامشخص" : "Unknown author")}
                </span>
              </div>
            </div>

            <div
              className="max-w-5xl mx-auto text-justify"
              dangerouslySetInnerHTML={{
                __html: post.content || post.excerpt || "",
              }}
            />
          </div>
        </article>

        {/* مقالات پیشنهادی */}
        {otherPosts.length > 0 && (
          <div className="max-w-5xl mx-auto mt-12">
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              مقالات پیشنهادی
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherPosts.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.id}`}
                  className="flex items-center bg-slate-800 rounded-lg shadow p-3 hover:bg-slate-700 transition"
                >
                  <img
                    src={item.image?.src || item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md ml-3"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x100";
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-slate-300 text-sm line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200 ease-in-out"
          >
            {lang === "fa" ? "مشاهده تمام مقالات" : "View all articles"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;