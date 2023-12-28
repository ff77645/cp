import { createRouter, createWebHistory } from 'vue-router'
import BuildView from '@/views/BuildView/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/build'
    },
    {
      path: '/build',
      name: 'build',
      component: BuildView
    }
  ]
})

export default router
