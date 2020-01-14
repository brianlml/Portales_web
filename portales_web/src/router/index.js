import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/figs',
    name: 'figs',
    component: () => import(/*webpackChunkName:"about"*/'../views/Figs.vue')
  },
 
]

const router = new VueRouter({
  routes
})

export default router
