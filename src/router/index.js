import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layout/BasicLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BasicLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home')
      }
    ]
  },
  {
    path: '/icon',
    component: BasicLayout,
    redirect: '/icon',
    children: [
      {
        path: '/icon',
        name: 'Icon',
        component: () => import('@/views/Douya')
      }
    ]
  },
  {
    path: '/about',
    component: BasicLayout,
    redirect: '/about',
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About')
      }
    ]
  },
  {
    path: '/echarts',
    component: BasicLayout,
    redirect: '/about',
    children: [
      {
        path: '/echarts/line',
        name: 'LineDemo',
        component: () => import('@/views/echarts/LineDemo')
      },
      {
        path: '/echarts/pie',
        name: 'PieDemo',
        component: () => import('@/views/echarts/PieDemo')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
