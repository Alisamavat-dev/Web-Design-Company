export const fetchFooter = async (lang) => {
  try {
    const response = await fetch("/api/db.json");

    if (!response.ok) {
      throw new Error("Failed to fetch footer data");
    }

    const json = await response.json();

    if (!json || !json[lang]?.translation || !json[lang].translation.Footer) {
      throw new Error("Invalid data structure from API for footer data");
    }

    return json[lang].translation.Footer;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    throw error;
  }
};
