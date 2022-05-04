import Vue from 'vue'
import Router from 'vue-router'
import ItemList from '@/components/ItemList'
import Cart from '../components/Cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ItemList',
      component: ItemList
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
