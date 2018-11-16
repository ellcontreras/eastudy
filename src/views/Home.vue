<template>
  <div>
    <h1 class="title is-1 has-text-centered">Quizes de la semana(proximamente)</h1>
    <div class="columns">
      <div class="column">
        <QuizCard name="Quimica" img="http://1.bp.blogspot.com/-VWiC0EBxi2o/UiKDeM-jaxI/AAAAAAAAND8/4AlixpFPVzw/s1600/fumigacion_en_avion.jpg" />
      </div>
      <div class="column">
        <QuizCard name="Fisica" img="https://trinoceronte.files.wordpress.com/2014/12/thumb.jpg" />
      </div>
    </div>
    <hr>
    <h2 class="subtitle is-2 has-text-centered">Categorias de estudio</h2>
    <div class="columns">
      <div class="column">
        <CategoryCard name="Ciencias Naturales" color="primary" />
      </div>
      <div class="column">
        <CategoryCard name="Matemáticas" color="danger" />
      </div>
    </div>
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
