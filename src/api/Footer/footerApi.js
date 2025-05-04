export const fetchFooter = async (lang) => {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSONBIN_BIN_ID}`
  );
  const json = await response.json();
  return json.record[lang].translation.Footer;
};
