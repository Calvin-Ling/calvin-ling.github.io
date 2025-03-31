import Vue from 'vue'
import VueRouter from 'vue-router'
import SixLayerNestedComponents from '../cases/SixLayerNestedComponents.vue'
import ThreeLayerNestedComponents from '../cases/ThreeLayerNestedComponents.vue'
import OneLayerNestedComponents from '../cases/OneLayerNestedComponents.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SixLayerNestedComponents',
    component: SixLayerNestedComponents
  },
  {
    path: '/3layer',
    name: 'ThreeLayerNestedComponents',
    component: ThreeLayerNestedComponents
  },
  {
    path: '/1layer',
    name: 'OneLayerNestedComponents',
    component: OneLayerNestedComponents
  }
]

const router = new VueRouter({
  mode: 'history',  // 可选：去除 URL 中的 #
  base: process.env.BASE_URL,
  routes
})

export default router