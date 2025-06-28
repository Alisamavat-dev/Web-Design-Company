export const fetchBlogPosts = async (lang = "en") => {
  try {
    const res = await fetch("https://alisamavat-dev.github.io/Web-Design-Company/db.json");

    if (!res.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const result = await res.json();

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
    return [];
  }
};
