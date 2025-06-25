export const fetchBlogPosts = async (lang) => {
  try {
    const response = await fetch("/api/db.json");

    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const json = await response.json();

    if (!json || !json[lang]?.translation || !json[lang].translation.Blog) {
      throw new Error("Invalid data structure from API for blog posts");
    }

    return json[lang].translation.Blog.flat();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};

export const fetchSEO = async (lang) => {
  try {
    const response = await fetch("/api/db.json");

    if (!response.ok) {
      throw new Error("Failed to fetch SEO data");
    }

    const json = await response.json();

    if (!json || !json[lang]?.translation || !json[lang].translation.SEO) {
      throw new Error("Invalid data structure from API for SEO data");
    }

    return json[lang].translation.SEO;
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    throw error;
  }
};
