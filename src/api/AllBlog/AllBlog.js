// api/blogService.ts
export const fetchBlogData = async () => {
  try {
    const response = await fetch("https://alisamavat-dev.github.io/Web-Design-Company/db.json");

    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const json = await response.json();

    if (!json || !json["fa"]?.translation) {
      throw new Error("Invalid data structure from API for blog data");
    }

    const data = json["fa"].translation;

    return {
      posts: Array.isArray(data.Blog) ? data.Blog.flat() : [],
      seo: data.SEO || {},
    };
  } catch (error) {
    console.error("Error fetching all blog data:", error);
    return { posts: [], seo: {} };
  }
};

export const fetchAllBlog = async () => {
  return await fetchBlogData();
};

export const fetchAllBlogSEO = async () => {
  const data = await fetchBlogData();
  return data.seo;
};