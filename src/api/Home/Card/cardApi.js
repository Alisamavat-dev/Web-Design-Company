export const fetchCard = async (lang) => {
  try {
    const response = await fetch("/api/db.json");

    if (!response.ok) {
      throw new Error("Failed to fetch card data");
    }

    const json = await response.json();

    if (!json || !json[lang]?.translation || !json[lang].translation.Card) {
      throw new Error("Invalid data structure from API for card data");
    }

    return json[lang].translation.Card;
  } catch (error) {
    console.error("Error fetching card data:", error);
    throw error;
  }
};
