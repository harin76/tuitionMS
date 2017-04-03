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
      path: '/list-measures',
      name: 'List Measures',
      component: createWorkarea('ListMeasures')
    },
    {
      path: '/measure',
      name: 'CreateMeasure',
      component: createWorkarea('Measure')
    },
    {
      path: '/measure/:id',
      name: 'EditMeasure',
      component: createWorkarea('Measure')
    }
  ]
})
