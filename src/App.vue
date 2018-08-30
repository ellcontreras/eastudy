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

input, textarea {
  background-color: whitesmoke;
  margin: 0;
  padding: 10px;
  border: none;
  width: 100%;
  color: #2c3e50;
  border-radius: 10px;
}

textarea {
  resize: none;
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
