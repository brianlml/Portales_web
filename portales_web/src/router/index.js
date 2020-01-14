import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/figs',
    name: 'figs',
    component: () => import(/*webpackChunkName:"about"*/'../views/Figs.vue')
  },
  {
    path: '/nebula',
    name: 'nebula',
    component: () => import(/*webpackChunkName:"about"*/'../views/Nebula.vue')
  },
  {
    path: '/mandarina',
    name: 'mandarina',
    component: () => import(/*webpackChunkName:"about"*/'../views/Mandarina.vue')
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
 
]

const router = new VueRouter({
  routes
})

export default router
