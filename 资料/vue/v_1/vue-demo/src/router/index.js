import Vue from 'vue'
import Router from 'vue-router'
import element from 'element-ui'
import Hello from '@/components/Hello'

import list from '@/components/list'


Vue.use(Router)
Vue.use(element)

export default new Router({
  routes: [

    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }


  ]
})
