import Vue from 'vue'
import Router from 'vue-router'
import F1 from '@/views/demo1/Father.vue'
import F2 from '@/views/demo2/Father.vue'
import F3 from '@/views/demo3/Father.vue'
import F4 from '@/views/demo4/Father.vue'
import F5 from '@/views/demo5/Father.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'F1',
      component: F1
    },
    {
      path: '/f2',
      name: 'F2',
      component: F2
    },
    {
      path: '/f3',
      name: 'F3',
      component: F3
    },
    {
      path: '/f4',
      name: 'F4',
      component: F4
    },
    {
      path: '/f5',
      name: 'F5',
      component: F5
    }
  ]
})

