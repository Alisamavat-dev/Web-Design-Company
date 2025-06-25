import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap()],
  server: {
    proxy: {
      "/api": {
        target: "https://ali-samavat.ir",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
