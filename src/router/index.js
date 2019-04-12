import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layout/Home'
import office from '@/views/main/office'
Vue.use(Router)

export default new Router({
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/office',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'office',
          name: 'officeIndex',
          component: office,
          meta: {
            index: 0
          }
        }
      ]
    }
  ]
})
