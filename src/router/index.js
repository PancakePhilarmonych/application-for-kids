import { createRouter, createWebHistory } from 'vue-router'
import DrawingBoard from '../pages/DrawingBoard.vue'
import WordsBoard from '../pages/WordsBoard.vue'

const routes = [
  {
    path: '/',
    name: 'DrawingBoard',
    component: DrawingBoard
  },

  {
    path: '/words-board',
    name: 'WordsBoard',
    component: WordsBoard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
