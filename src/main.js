import { createApp } from 'vue'
import './style.css'
import './assets/main.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
