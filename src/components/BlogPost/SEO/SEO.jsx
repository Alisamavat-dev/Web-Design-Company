import { Helmet } from "react-helmet";
import { useEffect } from "react";

const SEO = ({
  title = "عنوان پیش‌فرض مقاله",
  title_en,
  excerpt = "توضیحات پیش‌فرض مقاله",
  content = "محتوای پیش‌فرض مقاله",
  image = "https://via.placeholder.com/800x400",
  author = "نام نویسنده",
  date,
  category = "دسته‌بندی",
  tags = [],
  lang = "fa",
  url = "",
  canonical,
  robots = "index, follow",
  publisher = "Web Design Company",
  publisherLogo = "https://uploadkon.ir/uploads/fd0e01_25logo-web.png",
}) => {
  useEffect(() => {
    if (lang) {
      document.documentElement.lang = lang;
    }

    if (typeof window !== "undefined" && !url) {
      url = window.location.href;
    }
  }, [lang, url]);

  const description = excerpt || (typeof content === 'string' ? content.slice(0, 160) : '');
  const keywords = [category, ...tags].join(", ");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta name="language" content={lang} />
      <link rel="canonical" href={canonical || url} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          ...(title_en && { alternativeHeadline: title_en }),
          inLanguage: lang,
          articleBody: content,
          description: description,
          image: image,
          author: {
            "@type": "Person",
            name: author,
          },
          ...(date && { datePublished: date }),
          keywords: keywords,
          genre: category,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
          publisher: {
            "@type": "Organization",
            name: publisher,
            logo: {
              "@type": "ImageObject",
              url: publisherLogo,
            },
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;