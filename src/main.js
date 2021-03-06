import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)


axios.defaults.baseURL = 'https://photogear-store.xyz/'
createApp(App).use(store).use(router).mount('#app')