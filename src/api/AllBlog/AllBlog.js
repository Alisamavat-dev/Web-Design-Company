// api/blogService.ts
export const fetchBlogData = async (lang = "fa") => {
  try {
    const response = await fetch("/api/db.json");

    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const json = await response.json();

    if (!json || !json[lang]?.translation) {
      throw new Error("Invalid data structure from API for blog data");
    }

    const data = json[lang].translation;

    return {
      posts: Array.isArray(data.Blog) ? data.Blog.flat() : [],
      seo: data.SEO || {},
    };
  } catch (error) {
    console.error("Error fetching all blog data:", error);
    throw error;
  }
};

export const fetchAllBlog = async (lang) => {
  return await fetchBlogData(lang);
};

export const fetchAllBlogSEO = async (lang) => {
  const data = await fetchBlogData(lang);
  return data.seo;
};
