<template>
  <div id="app">
    <Navbar />
    <vs-row id="main-container" vs-type="flex" vs-justify="center" vs-align="center">
      <vs-col vs-w="8">
        <router-view/>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#main-container {
  margin-top: 1em;
}
</style>
