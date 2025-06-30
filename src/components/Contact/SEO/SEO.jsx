import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const SEO = ({ page = "contact" }) => {
  const { i18n } = useTranslation();
  const { data: seoData } = useQuery({
    queryKey: ["SEO", i18n.language],
    queryFn: async () => {
      const response = await fetch(
        "https://alisamavat-dev.github.io/Web-Design-Company/db.json"
      );
      const data = await response.json();
      return data.fa.translation.SEO;
    },
  });

  useEffect(() => {
    if (!seoData) {
      console.error("SEO data is not loaded.");
      return;
    }

    if (!seoData[page]) {
      console.error(`SEO data for page '${page}' not found.`, seoData);
      return;
    }

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

    // Twitter tags
    if (seo.twitter) {
      const twitterFields = [
        ["twitter:card", seo.twitter.card || "summary_large_image"],
        ["twitter:site", seo.twitter.site],
        ["twitter:creator", seo.twitter.creator],
        ["twitter:title", seo.twitter.title || seo.title],
        ["twitter:description", seo.twitter.description || seo.description],
        ["twitter:image", seo.twitter.image || seo.og?.image?.src],
      ];
      twitterFields.forEach(([name, value]) => updateMetaTag(name, value));
    }

    if (seo.viewport) updateMetaTag("viewport", seo.viewport);

    // Schema.org
    const updateSchemaTag = (schemaData) => {
      if (!schemaData) return;

      let schemaScript = document.querySelector(
        "script[type='application/ld+json']"
      );
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    };

    if (seo.schemaOrg) {
      updateSchemaTag(seo.schemaOrg);
    }
  }, [seoData, page]);

  return null;
};

export default SEO;
