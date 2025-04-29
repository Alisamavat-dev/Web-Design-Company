import React, { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

const SEO = () => {
  const {
    data: SEOHome,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["SEOHome"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSONBIN_BIN_ID}`,
        {
          headers: {
            "X-Master-Key": import.meta.env.VITE_JSONBIN_MASTER_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات SEO");
      }

      const data = await response.json();
      console.log("SEO Data:", data.record.SEOHome);
      return data.record.SEOHome;
    },
  });

  console.log("Current SEO state:", SEOHome);

  useEffect(() => {
    if (SEOHome) {
      document.title = SEOHome?.title;

      const updateMetaTag = (name, content) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement("meta");
          meta.name = name;
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      updateMetaTag("description", SEOHome?.description);
      updateMetaTag("keywords", SEOHome?.keywords);
      updateMetaTag("author", SEOHome?.author);
      updateMetaTag("robots", SEOHome?.robots);
      updateMetaTag("viewport", SEOHome?.viewport);
    }
  }, [SEOHome]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[80vh] bg-gray-900">
        <AiOutlineLoading3Quarters
          size={44}
          className="animate-spin text-gray-400"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[80vh] bg-gray-900">
        <p className="text-red-400">Error: {error.message}</p>
      </div>
    );
  }
};

export default SEO;
