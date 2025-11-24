import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Para GitHub Pages, use o nome do seu repositório
  // Se o repositório for "hd-sistemas-seu-lar-seguro", o base será "/hd-sistemas-seu-lar-seguro/"
  // Para produção local ou domínio customizado, use "/"
  base: process.env.NODE_ENV === "production" 
    ? (process.env.VITE_BASE_URL || "/hd-sistemas-seu-lar-seguro/")
    : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
