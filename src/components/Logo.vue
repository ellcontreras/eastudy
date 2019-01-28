<template>
  <img
    src="@/assets/eastudy.svg"
    :class="{'normal' : where === 'normal', 'navbar' : where === 'navbar'}"
    alt="eastudy logo"
  >
</template>

<script>
export default {
  name: "Logo",
  props: {
    where: { type: String, default: "normal" }
  }
};
</script>


<style scoped>
img {
  background: transparent;
}

.normal {
  width: 1380px;
  height: 380px;
}

.navbar {
  width: 230px;
  height: 63px;
}
</style>

