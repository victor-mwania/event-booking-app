import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Tickets from './views/Tickets.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: Tickets
    }
  ]
})
