<template>
  <nav class="nav has-shadow" id="top">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item" href="#">
          <h1>eTRM</h1>
        </a>
      </div>
       <div class="nav-right nav-menu">
         <router-link class="nav-item is-tab" to="logout">Logout</router-link>
       </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      title: 'Navbar'
    }
  }
}
</script>
