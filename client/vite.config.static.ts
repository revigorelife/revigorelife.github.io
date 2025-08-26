import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",                 // custom domain at site root
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: { output: { manualChunks: undefined } },
  },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  root: ".",                 // client is the project root for this package
});
