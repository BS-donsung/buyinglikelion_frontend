import { createApp } from 'vue'
import '@/style/index.scss'
import App from './App.vue'
import { router } from "@/routes"
import { createPinia } from "pinia";

import "vuetify/styles"
import { createVuetify } from "vuetify"

const pinia = createPinia();
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(router)
    .use(pinia)
    .use(vuetify)
    .mount('#app')
