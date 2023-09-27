import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MangaDetailView from '../views/MangaDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/manga/:id',
      name: 'MangaDetails',
      component: MangaDetailView,
      props: true
    }
  ]
})

export default router