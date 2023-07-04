import { createWebHistory, createRouter } from "vue-router"

import HomePage from '@/pages/HomePage.vue'
import CatalogPage from '@/pages/CatalogPage.vue'
import TeamPage from '@/pages/TeamPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/catalog',
        component: CatalogPage
    },
    {
        path: '/team',
        component: TeamPage
    },
    {
        path: '/contact',
        component: ContactPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router