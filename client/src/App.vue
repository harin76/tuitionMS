<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">TuitionMS</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">TuitionMS</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="/#/" @click="hideMenu">Home</a>
        <a class="mdl-navigation__link" href="/#/students" @click="hideMenu">Students</a>
        <a class="mdl-navigation__link" href="/#/fees" @click="hideMenu">Fees</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  require('material-design-lite')
  import { mapActions } from 'vuex'
  export default {
    name: 'app',
    created () {
      this.setReferenceData()
    },
    methods: {
      ...mapActions(['setReferenceData']),
      hideMenu: function () {
        document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
        document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>
