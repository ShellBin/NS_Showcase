import Vue from 'vue'
import Router from 'vue-router'
import AdminView from '../admin-view/AdminView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      component: AdminView
    }
  ]
})
