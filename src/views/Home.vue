<template>
  <div>
    <vs-row>
      <vs-col vs-w="6">
        <CategoryCard name="Hello" />
      </vs-col>
      <vs-col vs-w="6">
        <CategoryCard name="World!" />
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-w="6">
        <CategoryCard name="Hello" />
      </vs-col>
      <vs-col vs-w="6">
        <CategoryCard name="World!" />
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-w="6">
        <CategoryCard name="Hello" />
      </vs-col>
      <vs-col vs-w="6">
        <CategoryCard name="World!" />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import CategoryCard from '@/components/CategoryCard.vue'

export default {
  name: 'home',
  components: {
    CategoryCard
  }
}
</script>

<style>
.vs-row {
  margin-bottom: 1em;
}
</style>

