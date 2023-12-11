import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const findComponent = (path: string) => () => import(`@/views/${path}.vue`);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: findComponent('Login')
  },
  {
    path: '/posts',
    name: 'posts',
    component: findComponent('Posts')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
