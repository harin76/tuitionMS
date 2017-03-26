<template>
  <router-view></router-view>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'app',
    created () {
      console.log(this)
      this.setReferenceData()
    },
    methods: {
      ...mapActions(['setReferenceData'])
    }
  }
</script>
