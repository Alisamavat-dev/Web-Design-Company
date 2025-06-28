export const fetchHeader = async (lang = 'en') => {
  const url = "https://alisamavat-dev.github.io/Web-Design-Company/db.json";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.warn(`Fetch failed with status: ${response.status}`);
      return null;
    }

    const data = await response.json();

    if (!data?.[lang]?.translation?.Header) {
      console.warn(`Header not found for language: ${lang}`);
      return null;
    }

    return data[lang].translation.Header;
  } catch (error) {
    console.error("Error fetching header data:", error);
    return null;
  }
};
