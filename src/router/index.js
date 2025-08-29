import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import(/* webpackChunkName: "cards" */ '../components/CardsSection.vue'),
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import(/* webpackChunkName: "payments" */ '../views/PaymentsSection.vue'),
  },
  {
    path: '/credit',
    name: 'credit',
    component: () => import(/* webpackChunkName: "credit" */ '../views/CreditSection.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsSection.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
