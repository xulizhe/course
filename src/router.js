import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Home/index'),
      children: [
        {
          path: '/',
          component: () => import('./views/Home/List')
        },
        {
          path: 'detail',
          component: () => import('./views/Home/Detail')
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('./views/Download')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/Me')
    }
  ]
})
