import { createRouter, createWebHistory } from 'vue-router'

import shopRoutes from './module/shop.js'
import authRoutes from './module/auth.js'

const baseRoute = []
const routes = baseRoute.concat(shopRoutes, authRoutes)

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router