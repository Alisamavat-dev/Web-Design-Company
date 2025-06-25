export const fetchHeader = async (lang) => {
  try {
    const response = await fetch("/api/db.json");

    if (!response.ok) {
      throw new Error("Failed to fetch header data");
    }

    const json = await response.json();

    if (!json || !json[lang]?.translation || !json[lang].translation.Header) {
      throw new Error("Invalid data structure from API for header data");
    }

    return json[lang].translation.Header;
  } catch (error) {
    console.error("Error fetching header data:", error);
    throw error;
  }
};
