import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const SEO = ({ page = "home" }) => {
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
    if (seoData && seoData[page]) {
      const seo = seoData[page];
      document.title = seo.title;

      // Canonical tag
      let canonicalUrl =
        seo.canonical || (seo.og && seo.og.url) || window.location.href;
      let canonicalTag = document.querySelector("link[rel='canonical']");
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute("href", canonicalUrl);

      const updateMetaTag = (name, content) => {
        if (!content) return;
        let meta;
        if (name.startsWith("og:")) {
          meta = document.querySelector(`meta[property='${name}']`);
          if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("property", name);
            document.head.appendChild(meta);
          }
          meta.setAttribute("content", content);
        } else {
          meta = document.querySelector(`meta[name='${name}']`);
          if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", name);
            document.head.appendChild(meta);
          }
          meta.setAttribute("content", content);
        }
      };

      updateMetaTag("description", seo.description);
      updateMetaTag("keywords", seo.keywords);
      updateMetaTag("author", seo.author);
      updateMetaTag("publisher", seo.publisher);
      // Robots tag (default: index, follow)
      updateMetaTag("robots", seo.robots || "index, follow");
      if (seo.og) {
        // Open Graph tags
        const ogFields = [
          ["og:title", seo.og.title || seo.title],
          ["og:description", seo.og.description || seo.description],
          [
            "og:image",
            typeof seo.og.image === "object" ? seo.og.image?.src : seo.og.image,
          ],
          ["og:type", seo.og.type || "website"],
          ["og:site_name", seo.og.site_name],
          ["og:locale", seo.og.locale],
          ["og:url", seo.og.url || window.location.href],
        ];
        ogFields.forEach(([name, value]) => updateMetaTag(name, value));
      }
      if (seo.viewport) updateMetaTag("viewport", seo.viewport);
    }
  }, [seoData, page]);

  return null;
};

export default SEO;
