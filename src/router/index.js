import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import fb from '../utilities/firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/todo',
    name: 'TodoList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoList.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// route gaurd to protect require auth routes
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !await fb.getCurrentUser()) {
    next('/login')
  } else if (requiresAuth && !currentUser) {
    next()
  } else {
    next()
  }
})

// route gaurd to insure page relode when new user registers
router.afterEach(async (to, from) => {
  if(to.name == "TodoList" && from.name == "Register")
  {
    document.location.reload()
  }
})

export default router
