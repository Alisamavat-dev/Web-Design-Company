import React, { useEffect } from "react";

const SEO = ({
  title = "عنوان پیش‌فرض مقاله",
  description = "توضیحات پیش‌فرض مقاله",
  keywords = "",
  author = "نام نویسنده",
  robots = "index, follow",
  viewport = "width=device-width, initial-scale=1.0",
  ogTitle = "",
}) => {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);
    updateMetaTag("robots", robots);
    updateMetaTag("viewport", viewport);
    updateMetaTag("og:title", ogTitle || title);
  }, [title, description, keywords, author, robots, viewport, ogTitle]);

  return null;
};

export default SEO;
