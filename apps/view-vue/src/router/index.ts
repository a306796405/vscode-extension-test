import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import { routes } from '@hf/ext-common'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.a.home.path,
      name: routes.a.home.name,
      component: HomeView
    },
    {
      path: routes.b.about.path,
      name: routes.b.about.name,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    }
  ]
})

export default router
