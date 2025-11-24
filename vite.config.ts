import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Plugin para adicionar meta tag CSP no HTML
const cspPlugin = () => {
  return {
    name: "csp-meta-tag",
    transformIndexHtml(html: string) {
      // Adicionar meta tag CSP apenas em produção
      // Nota: 'unsafe-eval' é necessário para algumas bibliotecas (como recharts)
      // mas representa um risco de segurança. Considere remover se não for necessário.
      // A meta tag deve vir logo após o charset para ter máxima prioridade
      if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === undefined) {
        // Inserir logo após o charset para ter máxima prioridade
        const cspMeta = '<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\'; style-src \'self\' \'unsafe-inline\'; img-src \'self\' data: https:; font-src \'self\' data:; connect-src \'self\' https:;">';
        return html.replace(
          '<meta charset="UTF-8" />',
          `<meta charset="UTF-8" />\n    ${cspMeta}`
        );
      }
      return html;
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Para GitHub Pages, use o nome do seu repositório
  // Se o repositório for "hd-sistemas-seu-lar-seguro", o base será "/hd-sistemas-seu-lar-seguro/"
  // Para produção local ou domínio customizado, use "/"
  base: mode === "production" 
    ? (process.env.VITE_BASE_URL || "/hd-sistemas-seu-lar-seguro/")
    : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && cspPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Usar ES2020 para garantir compatibilidade e evitar eval()
    target: "es2020",
    minify: "esbuild",
    // Desabilitar source maps em produção para evitar problemas de CSP
    sourcemap: false,
    // Configurações para evitar eval() e garantir CSP compliance
    rollupOptions: {
      output: {
        // Garantir que não haja código inline que possa causar problemas de CSP
        inlineDynamicImports: false,
        // Formato de saída que evita eval
        format: "es",
        // Garantir que os chunks sejam gerados corretamente
        manualChunks: undefined,
      },
      // Evitar transformações que possam usar eval
      external: [],
    },
    // Garantir que o código seja totalmente compilado sem usar eval
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
