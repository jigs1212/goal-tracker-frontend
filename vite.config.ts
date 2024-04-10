// @ts-ignore
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
const root = resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    proxy: { "/api": "http://localhost:8000" },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": resolve(root, "components"),
    },
  },
});
