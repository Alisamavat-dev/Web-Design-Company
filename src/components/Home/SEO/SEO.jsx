import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { i18n } = useTranslation();
  const { data: seoData } = useQuery({
    queryKey: ["SEO", i18n.language],
    queryFn: async () => {
      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSONBIN_BIN_ID}`
      );

      const data = await response.json();
      return data.record[i18n.language].translation.SEO;
    },
  });

  useEffect(() => {
    if (seoData) {
      document.title = seoData.title;

      const updateMetaTag = (name, content) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement("meta");
          meta.name = name;
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      updateMetaTag("description", seoData.description);
      updateMetaTag("keywords", seoData.keywords);
      updateMetaTag("author", seoData.author);
      updateMetaTag("robots", seoData.robots);
      updateMetaTag("viewport", seoData.viewport);
      updateMetaTag("og:title", seoData.ogTitle);
    }
  }, [seoData]);
};

export default SEO;
