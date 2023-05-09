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
            '/auth': {
                target: 'https://port-0-lionbuy-backendserver-6g2llfq3u344.sel3.cloudtype.app',
                changeOrigin: true,
            },
            "/search" : {
                target: 'https://3c43bb58-adce-42d2-a6d4-5133de738949.mock.pstmn.io',
                changeOrigin: true,
            },
            "/wishlist" : {
                target: 'https://3c43bb58-adce-42d2-a6d4-5133de738949.mock.pstmn.io',
                changeOrigin: true,
            },
            "/accountbook": {
                target: 'https://3c43bb58-adce-42d2-a6d4-5133de738949.mock.pstmn.io',
                changeOrigin: true,
            },
        },
    }
})
