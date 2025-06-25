import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import SEO from "./SEO/SEO";
import { fetchBlogPosts } from "../../api/BlogPost/BlogPost";
import { slugify } from "../../utils/slugify";
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
    queryFn: () => fetchBlogPosts(lang),
  });

  let post = null;
  let otherPosts = [];

  if (blogPosts && Array.isArray(blogPosts)) {
    console.log("ID from URL (useParams):", id);
    post = blogPosts.find((p) => {
      console.log("Post ID (p.id):", p.id);
      return String(p.id) === String(id);
    });
    otherPosts = blogPosts.filter((p) => String(p.id) !== String(id));
  }

  if (isPending) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <AiOutlineLoading3Quarters
          className="animate-spin text-blue-400"
          size={44}
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
    <div className="relative min-h-screen flex flex-col top-21">
      {/* MAIN + SIDEBAR */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 flex-1">
        {/* MAIN CONTENT */}
        <article className="lg:col-span-8 bg-slate-800 rounded-2xl shadow-lg p-6">
          <SEO
            title={post.title}
            description={
              post.excerpt || (post.content ? post.content.slice(0, 160) : "")
            }
            keywords={[post.category, ...(post.tags || [])].join(", ")}
            author={post.author}
            ogTitle={post.title_en}
          />

          <img
            src={post.image?.src || post.image}
            alt={post.image?.alt || post.title}
            title={post.image?.title || post.title}
            className="w-full h-100 object-cover rounded-lg shadow mb-6"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/800x400")
            }
          />

          <h1 className="text-3xl font-extrabold mb-4 text-white text-center">
            {post.title}
          </h1>

          <div className="flex flex-wrap text-sm text-gray-300 mb-6">
            <div className="flex items-center mr-4 mb-2">
              <FaCalendarAlt className="ml-1" />
              <span>
                {post.date || (lang === "fa" ? "تاریخ نامشخص" : "Unknown date")}
              </span>
            </div>
            <div className="flex items-center mb-2">
              <FaUser className="ml-1" />
              <span>
                {post.author ||
                  (lang === "fa" ? "نویسنده نامشخص" : "Unknown author")}
              </span>
            </div>
          </div>

          <div
            className="prose prose-invert max-w-none prose-lg prose-blue"
            dangerouslySetInnerHTML={{
              __html: post.content || post.excerpt || "",
            }}
          />
        </article>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 mb-5">
          <div className="sticky top-30">
            <Link
              to="/blog"
              className="block text-center bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
            >
              {lang === "fa" ? "بازگشت به لیست مقالات" : "Back to Blog List"}
            </Link>

            {otherPosts.length > 0 && (
              <div className="bg-slate-800 rounded-2xl p-4 shadow-lg mt-6">
                <h3 className="text-lg font-bold mb-4 text-blue-400">
                  {lang === "fa" ? "مقالات پیشنهادی" : "Recommended Articles"}
                </h3>
                <div className="space-y-3">
                  {otherPosts.slice(0, 3).map((item) => (
                    <Link
                      key={item.id}
                      to={`/blog/${item.id}`}
                      className="flex items-center bg-slate-700 rounded-lg p-3 hover:bg-blue-600 hover:shadow-md transition duration-200"
                    >
                      <img
                        src={item.image?.src || item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md mr-3 border border-slate-500"
                        onError={(e) =>
                          (e.target.src = "https://via.placeholder.com/100x100")
                        }
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm sm:text-base mb-1 line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-300 text-xs sm:text-sm line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
