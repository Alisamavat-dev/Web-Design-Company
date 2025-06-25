export const fetchBlogPosts = async (lang = "en") => {
  try {
    const res = await fetch("/api/db.json");

    if (!res.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const result = await res.json();

    // بررسی ساختار داده دریافتی
    if (
      !result ||
      !result[lang]?.translation ||
      !result[lang].translation.Blog
    ) {
      throw new Error("Invalid data structure from API");
    }

    return result[lang].translation.Blog.flat();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};
