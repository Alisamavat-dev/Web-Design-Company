import React, { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { i18n } = useTranslation();
  const {
    data: seoData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["SEO", i18n.language],
    queryFn: async () => {
      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSONBIN_BIN_ID}`,
        {
          headers: {
            "X-Master-Key": import.meta.env.VITE_JSONBIN_MASTER_KEY,
          },
        }
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

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="relative">
          <AiOutlineLoading3Quarters
            size={44}
            className="animate-spin text-blue-400"
          />
          <div className="absolute inset-0 blur-xl bg-blue-500/20 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="bg-red-500/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-500/20">
          <p className="text-red-400">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default SEO;
