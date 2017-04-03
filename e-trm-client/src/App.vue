<template>
  <router-view></router-view>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'app',
    created () {
      this.setReferenceData()
    },
    methods: {
      ...mapActions(['setReferenceData'])
    }
  }
</script>
