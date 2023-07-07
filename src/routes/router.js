import { createWebHistory, createRouter } from "vue-router"

import HomePage from '@/pages/HomePage.vue'
import CatalogPage from '@/pages/CatalogPage.vue'
import TeamPage from '@/pages/TeamPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import FirstProduct from '@/pages/products/FirstProduct.vue'
import SecondProduct from '@/pages/products/SecondProduct.vue'
import ThirdProduct from '@/pages/products/ThirdProduct.vue'

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
    {
        path: '/product01',
        component: FirstProduct
    },
    {
        path: '/product02',
        component: SecondProduct
    },
    {
        path: '/product03',
        component: ThirdProduct
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router