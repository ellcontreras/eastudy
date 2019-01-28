<template>
  <div>
    <div class="hero has-text-centered">
      <div class="hero-body">
        <Logo/>
      </div>
    </div>

    <!-- basic info -->
    <div class="hero is-light is-medium">
      <div class="hero-body has-text-centered">
        <h2 class="subtitle is-2">Te ayudamos a estudiar</h2>
        <div class="columns">
          <div class="column">
            <i class="material-icons md-big md-primary">check_circle</i>
            <h3 class="subtitle is-3">Responde preguntas</h3>
            <p>Selecciona el tema sobre el que quieres estudiar y estudia mientras respondes preguntas</p>
          </div>
          <div class="column">
            <i class="material-icons md-big md-primary">format_list_numbered</i>
            <h3 class="subtitle is-3">Preparate para tu examen</h3>
            <p>Con los quizes creados puedes obtener tu puntuación para medir tu conocimiento</p>
          </div>
          <div class="column">
            <i class="material-icons md-big md-primary">add_circle_outline</i>
            <h3 class="subtitle is-3">Sube preguntas</h3>
            <p>Somos una plataforma colavorativa, cuando subes una pregunta ayudas a otros estudiantes a estudiar</p>
          </div>
        </div>
      </div>
    </div>

    <!-- areas -->
    <div class="hero is-medium is-primary">
      <div class="hero-body has-text-centered">
        <h2 class="subtitle is-2">Áreas de estudio</h2>
        <div class="columns">
          <div class="column">
            <i class="material-icons md-54">local_car_wash</i>
            <h3 class="subtitle is-3">Física</h3>
          </div>
          <div class="column">
            <i class="material-icons md-54">plus_one</i>
            <h3 class="subtitle is-3">Algebra</h3>
          </div>
          <div class="column">
            <i class="material-icons md-54">opacity</i>
            <h3 class="subtitle is-3">Química</h3>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <i class="material-icons md-54">insert_chart</i>
            <h3 class="subtitle is-3">Cálculo</h3>
          </div>
          <div class="column">
            <i class="material-icons md-54">nature_people</i>
            <h3 class="subtitle is-3">Biología</h3>
          </div>
          <div class="column">
            <i class="material-icons md-54">directions</i>
            <h3 class="subtitle is-3">Geometría</h3>
          </div>
        </div>

        <button
          @click="$router.push('/login')"
          class="button is-white is-rounded"
        >Comenzar a estudiar ahora</button>
      </div>
    </div>

    <!-- Prices -->
    <div class="hero">
      <div class="hero-body">
        <div class="card">
          <div class="card-content has-text-centered">
            <h2 class="subtitle is-2">Costo?</h2>Gratis!
            Para tener accesso a quizes debes de pagar $12usd al mes o $100 al año
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  components: { Logo }
};
</script>
