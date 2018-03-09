import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import rhinocerosTicketing from '@/components/ticketing/rhinocerosTicketing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/rhinocerosTicketing',
      name: 'rhinocerosTicketing',
      component: rhinocerosTicketing
    }
  ]
})
