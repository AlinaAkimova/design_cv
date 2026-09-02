import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TravelCaseView from '@/views/TravelCaseView.vue'
import FrontCaseView from '@/views/FrontCaseView.vue'
import BakeryCaseView from '@/views/BakeryCaseView.vue'

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
  },
  {
    path: '/projects/bakery',
    name: 'bakery-case',
    component: BakeryCaseView
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
