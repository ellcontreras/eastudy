<template>
  <home v-if="$firebase.auth().currentUser"/>
  <home-presentation v-else/>
</template>

<script>
import HomePresentation from "./HomePresentation.vue";
import Home from "./Home.vue";

export default {
  name: "HomeManager",
  components: { HomePresentation, Home }
};
</script>
