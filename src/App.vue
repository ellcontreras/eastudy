<template>
  <div id="app">
    <Navbar />
    <div class="container" id="main-container" vs-type="flex" vs-justify="center" vs-align="center">
        <router-view/>      
    </div>
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
}
#main-container {
  margin-top: 1em;
}

textarea {
  resize: none !important; 
}

label {
  font-weight: 700;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}
.card-title {
  color: white !important;
  font-weight: 500;
}
ul, .ul-tabs{
    list-style-type: none !important;
}
</style>
