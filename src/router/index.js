import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Portfolio from '../components/Portfolio.vue'
import Prices from '../components/Prices.vue'
import Contact from '../components/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/prices',
    name: 'prices',
    component: Prices
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router