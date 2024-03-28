import { createRouter, createWebHashHistory } from 'vue-router'
import PanelView from '../views/PanelView.vue'
import SidebarView from '../views/SidebarView.vue'
import { routes } from '@hf/ext-common'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.a.panelA.path,
      name: routes.a.panelA.name,
      component: PanelView
    },
    {
      path: routes.b.sidebarA.path,
      name: routes.b.sidebarA.name,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SidebarView
    }
  ]
})

export default router
