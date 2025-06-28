export const fetchBanner = async (lang) => {
  try {
    const response = await fetch("https://alisamavat-dev.github.io/Web-Design-Company/db.json");

    if (!response.ok) {
      throw new Error("Failed to fetch banner data");
    }

    const json = await response.json();

    if (!json || !json[lang]?.translation || !json[lang].translation.Banner) {
      throw new Error("Invalid data structure from API for banner data");
    }

    return json[lang].translation.Banner;
  } catch (error) {
    console.error("Error fetching banner data:", error);
    throw error;
  }
};
