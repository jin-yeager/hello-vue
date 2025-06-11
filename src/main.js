// src/main.js
import { createApp } from 'vue'
import './style.css'
import App    from './App.vue'
import router from './router/router.js'      // ← 추가

createApp(App)
    .use(router)                    // ← 추가
    .mount('#app')
