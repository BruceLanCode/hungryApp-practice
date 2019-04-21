import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  return new Router({
    linkActiveClass:'active',
    mode:'history',
    routes: [
      {
        path: '/',
        name: 'goods',
        component: () => import('../components/goods/goods.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../components/goods/goods.vue')
      },
      {
        path: '/ratings',
        name: 'ratings',
        component: () => import('../components/ratings/ratings.vue')
      },
      {
        path: '/seller',
        name: 'seller',
        component: () => import('../components/seller/seller.vue')
      }
    ]
  })
}

