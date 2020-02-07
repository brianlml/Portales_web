import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/figs',
    name: 'figs',
    component: () => import(/*webpackChunkName:"about"*/'../views/Figs.vue')
  },
  {
    path: '/mandarina_bar',
    name: 'mandarina_bar',
    component: () => import(/*webpackChunkName:"about"*/'../views/Mandarina_bar.vue')
  },
  {
    path: '/mandarina_lounge',
    name: 'mandarina_lounge',
    component: () => import(/*webpackChunkName:"about"*/'../views/Mandarina_lounge.vue')
  },
  {
    path: '/rooftop',
    name: 'rooftop',
    component: () => import(/*webpackChunkName:"about"*/'../views/Rooftop.vue')
  },
  {
    path: '/avalon',
    name: 'avalon',
    component: () => import(/*webpackChunkName:"about"*/'../views/Avalon.vue')
  },
  {
    path: '/mangos',
    name: 'mangos',
    component: () => import(/*webpackChunkName:"about"*/'../views/Mangos.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import(/*webpackChunkName:"about"*/'../views/Music.vue')
  },
  {
    path: '/lugares',
    name: 'lugares',
    component: () => import(/*webpackChunkName:"about"*/'../views/Rutas.vue')
  },
 
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
