<template>
  <div>
    <vs-row>
      <h1 class="text-center">Quizes de la semana</h1>
      <vs-col vs-w="6">
        <QuizCard name="Quimica" img="http://1.bp.blogspot.com/-VWiC0EBxi2o/UiKDeM-jaxI/AAAAAAAAND8/4AlixpFPVzw/s1600/fumigacion_en_avion.jpg" />
      </vs-col>
      <vs-col vs-w="6">
        <QuizCard name="Fisica" img="https://trinoceronte.files.wordpress.com/2014/12/thumb.jpg" />
      </vs-col>
    </vs-row>
    <vs-divider></vs-divider>
    <vs-row>
      <h2 class="text-center">Categorias de estudio</h2>
      <vs-col vs-w="4">
        <CategoryCard name="Ciencias Naturales" color="green" />
      </vs-col>
      <vs-col vs-w="4">
        <CategoryCard name="Economia" color="yellow" />
      </vs-col>
      <vs-col vs-w="4">
        <CategoryCard name="Computación" color="blue" />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import CategoryCard from '@/components/CategoryCard.vue'
import QuizCard from '@/components/QuizCard.vue'

export default {
  name: 'home',
  components: {
    CategoryCard,
    QuizCard
  }
}
</script>

<style>
.vs-row {
  margin-bottom: 1em;
}
</style>

