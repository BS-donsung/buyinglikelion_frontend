import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from "path";

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve : {
    alias : {
      "@" : path.resolve(__dirname, "./src"),
      "@style" : path.resolve(__dirname, "./src/style"),
      "@asset" : path.resolve(__dirname, "./src/asset"),
    }
  },
  server: {
    proxy: {
      '^/auth': {
        target: 'http://968482c3-2682-41c4-aaae-3593687a9bdc.mock.pstmn.io/auth',
        changeOrigin: true
      },
    }
  }
})
