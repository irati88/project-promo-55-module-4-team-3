import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/project-promo-55-module-4-team-3/",
  server: {
    open: "/",
    watch: {
      usePolling: true,
    },
  },
});
