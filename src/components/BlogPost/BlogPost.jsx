import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import SEO from "./SEO/SEO";
import { fetchBlogPosts } from "../../api/BlogPost/BlogPost";
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
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      <SEO
        title={post.title}
        description={
          post.excerpt || (post.content ? post.content.slice(0, 160) : "")
        }
        keywords={[post.category, ...(post.tags || [])].join(", ")}
        author={post.author}
        ogTitle={post.title_en}
      />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-30">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out"
          >
            <FaArrowRight className="ml-2" />
            {lang === "fa" ? "بازگشت به لیست مقالات" : "Back to blog list"}
          </Link>
        </div>

        <article className="overflow-hidden mx-auto">
          <div className="relative h-96">
            <img
              src={post.image?.src || post.image}
              alt={post.image?.alt || post.title}
              title={post.image?.title || post.title}
              className="max-w-5xl w-full h-full object-cover mx-auto"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400";
              }}
            />
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              {post.title}
            </h1>

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
