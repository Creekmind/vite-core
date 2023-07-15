import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
    origin: 'http://127.0.0.1:3001',
    hmr: {
      port: 22222
    }
  }
});
