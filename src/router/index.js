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
  },
  {
    path: '/find',
    name: 'Find',
    component: BasicLayout,
    redirect: '/find',
    children: [
      {
        path: '/find/one',
        name: 'One',
        component: () => import('@/views/find/one')
      },
      {
        path: '/find/oneDetail',
        name: 'OneDetail',
        component: () => import('@/views/find/oneDetail')
      },
      {
        path: '/find/two',
        name: 'Two',
        component: () => import('@/views/find/two')
      },
      {
        path: '/find/there',
        name: 'There',
        component: () => import('@/views/find/there')
      },
      {
        path: '/find/four',
        name: 'Four',
        component: () => import('@/views/find/four')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
