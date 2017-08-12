import Vue from 'vue'
import Router from 'vue-router'
import {createWorkarea} from '@/views/Factory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: createWorkarea('Home')
    },
    {
      path: '/students',
      name: 'ListStudents',
      component: createWorkarea('ListStudents')
    },
    {
      path: '/student',
      name: 'CreateStudent',
      component: createWorkarea('Student')
    },
    {
      path: '/student/:id',
      name: 'EditStudent',
      component: createWorkarea('Student')
    }
  ]
})
