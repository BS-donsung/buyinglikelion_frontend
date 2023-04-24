import { createApp } from 'vue'
import '@/style/default.scss'
import App from './App.vue'
import { router } from "@/routes"
import { createPinia } from "pinia";

const pinia = createPinia();


createApp(App).use(router).use(pinia).mount('#app')
