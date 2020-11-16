import { createRouter, createWebHistory } from 'vue-router'
import DrawingBoard from '../pages/DrawingBoard.vue'

const routes = [
  {
    path: '/',
    name: 'DrawingBoard',
    component: DrawingBoard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
