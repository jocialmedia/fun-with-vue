<template>
  <div id="nav">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
  import NavBar from '@/views/NavBar.vue'

  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
</script>

<style>
  #app {}
</style>