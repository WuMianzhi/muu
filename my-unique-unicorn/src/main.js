import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router'
import { i18n } from './i18n'

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(i18n)
    .use(router)
    .use(createPinia())
    .mount('#app')
