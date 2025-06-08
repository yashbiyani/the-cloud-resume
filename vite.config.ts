import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://sharing-rooster-20286.upstash.io',
        changeOrigin: true,
        secure: true,
        headers: {
          'Authorization': 'Bearer AU8-AAIjcDE2ZWFmMTIxZDNjN2M0OGRiOTIzOGUzOGUxMmNmNTc3YXAxMA'
        },
      },
    },
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
