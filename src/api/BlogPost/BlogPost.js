export const fetchBlogPosts = async (lang = "en") => {
    const res = await fetch("https://api.myjson.online/v1/records/f2ca8aca-b3ec-4bc2-b50e-9b67644cd229");
    const result = await res.json();
  
    const availableLangs = result?.data || {};
    const finalLang = availableLangs[lang] ? lang : Object.keys(availableLangs)[0];
  
    const posts = result?.data?.[finalLang]?.translation?.Blog?.[0];
    return posts || [];
  };
  