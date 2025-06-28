export const fetchComments = async (lang) => {
  try {
    const response = await fetch("https://alisamavat-dev.github.io/Web-Design-Company/db.json");

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const json = await response.json();

    if (!json || !json[lang]?.translation || !json[lang].translation.Comments) {
      throw new Error("Invalid data structure from API for comments");
    }

    return json[lang].translation.Comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};
