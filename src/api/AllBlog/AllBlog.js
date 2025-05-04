export const fetchAllBlog = async (lang) => {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSONBIN_BIN_ID}`
  );
  const json = await response.json();
  return json.record[lang].translation.Blog;
};

export const fetchAllBlogSEO = async (lang) => {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSONBIN_BIN_ID}`
  );
  const json = await response.json();
  return json.record[lang].translation.SEO;
};
