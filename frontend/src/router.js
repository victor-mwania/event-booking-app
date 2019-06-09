import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Tickets from './views/Tickets.vue'
import CreateEvents from './views/CreateEvents.vue';
Vue.use(Router)

let router =  new Router({
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
      component: Tickets,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/create-events',
      name: 'create-events',
      component: CreateEvents,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('jwt') == null){
      next({
        path: '/login',
        params: {nextUrl: to.fullPath}
      })
    }
    else {
      next()
    }
  }
  else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') == null){
        next()
    }
    else{
        next({ name: 'home'})
    }
}else {
    next() 
}
})

export default router;