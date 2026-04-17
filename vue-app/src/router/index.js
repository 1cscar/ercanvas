import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  { path: '/',        redirect: '/home' },
  { path: '/login',   component: () => import('@/views/LoginView.vue'), meta: { public: true } },
  { path: '/home',    component: () => import('@/views/HomeView.vue'),  meta: { requiresAuth: true } },
  // EditorView is a bridge — navigates to legacy app.html
  { path: '/editor',  component: () => import('@/views/EditorView.vue'), meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Auth guard
router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.user && !auth.loading) return '/login'
  if (to.path === '/login' && auth.user) return '/home'
})

export default router
