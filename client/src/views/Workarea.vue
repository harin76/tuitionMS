<template>
  <component :is="type"></component>
</template>

<script>
import Sidemenu from '@/components/Sidemenu'
import Navbar from '@/components/Navbar'
import Home from '@/views/Home'
import ListStudents from '@/views/Students/ListStudents'
import Student from '@/views/Students/Student'

export default {
  name: 'workarea',
  components: {
    Sidemenu,
    Navbar,
    Home,
    ListStudents,
    Student
  },
  data () {
    return {
      msg: 'Workarea',
      menus: [
        {
          title: 'Main',
          items: [
            {to: '/', name: 'Home'},
            {to: '/register', name: 'Register'},
            {to: '/employees', name: 'Employees'},
            {to: '/customers', name: 'Customers'},
            {to: '/reports', name: 'Reports'}
          ]
        }, {
          title: 'Products',
          items: [
            {to: '/listItems', name: 'Items'},
            {to: '/categories', name: 'Categories'},
            {to: '/modifiers', name: 'Modifiers'},
            {to: '/taxes', name: 'Taxes'},
            {to: '/discounts', name: 'Discounts'}
          ]
        }
      ]
    }
  },
  props: {
    type: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
