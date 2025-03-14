import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
    proxy: {
      "/api/digimon": {
        target: "https://apitcg.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/digimon/, "/api/digimon/cards"),
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
