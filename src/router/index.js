import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TravelCaseView from '@/views/TravelCaseView.vue'
import FrontCaseView from '@/views/FrontCaseView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects/travel',
    name: 'travel-case',
    component: TravelCaseView
  },
  {
    path: '/projects/front',
    name: 'front-case',
    component: FrontCaseView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
