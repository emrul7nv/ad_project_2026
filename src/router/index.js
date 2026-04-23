import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import OrdersView from '../views/OrdersView.vue'
import NewAdView from '../views/NewAdView.vue'
import AdListView from '../views/AdListView.vue'
import AdView from '../views/AdView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView,
    meta: { requiresAuth: true }
  },
  {
    path: '/new',
    name: 'newAd',
    component: NewAdView,
    meta: { requiresAuth: true }
  },
  {
    path: '/list',
    name: 'list',
    component: AdListView,
    meta: { requiresAuth: true }
  },
  {
    path: '/ad/:id',
    name: 'ad',
    component: AdView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Защита маршрутов
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLoggedIn = store.getters.isUserLoggedIn

  if (requiresAuth && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router