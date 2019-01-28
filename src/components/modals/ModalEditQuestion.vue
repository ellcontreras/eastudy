<template>
  <div class="modal" :class="{'is-active': active}" v-show="show">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <h1 class="h1 title is-1 has-text-centered">Modificar Pregunta</h1>
          <label class="checkbox">
            <input type="checkbox" v-model="question.data.isActive">
            Es valida esta pregunta?
          </label>
          <br>
          <label>Experiencia de la pregunta</label>
          <input class="input" v-model.number="question.data.experience">
          <div class="container">
            <label class="label">Titulo</label>
            <input
              type="text"
              class="input"
              v-model="question.data.title"
              placeholder="De que color es el caballo de napoleon?"
            >
            <br>
            <br>
            <label class="label">Categoria</label>
            <div class="select">
              <select v-model="question.data.category">
                <option value="ciencias-naturales">Ciencias Naturales</option>
                <option value="matematicas">Matemáticas</option>
              </select>
            </div>
            <br>
            <br>
            <label class="label">Contenido</label>
            <textarea
              v-model="question.data.content"
              class="textarea"
              placeholder="Habia un caballo bonito..."
            ></textarea>
          </div>
          <hr>
          <h2 class="subtitle is-2 has-text-centered">Respuestas</h2>

          <div class="container">
            <div v-for="answer in question.data.answers" :key="answer.id">
              <input
                type="text"
                class="input"
                v-model="answer.name"
                placeholder="El caballo se llama viernes"
              >
              <br>
              <label class="checkbox">
                <input type="checkbox" @change="onChangeIsTrue(answer.id)" v-model="answer.isTrue">
                Es la respuesta correcta?
              </label>
              <br>
              <br>
            </div>
          </div>
          <button @click="updateQuestion()" class="button is-link">Actualizar</button>
        </div>
      </div>
    </div>
    <button @click="changeActive()" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "ModalEditQuestion",
  props: {
    question: Object
  },
  data() {
    return {
      active: true,
      userAnswer: "",
      show: false,
      actualTrue: 0,
      show: false
    };
  },
  beforeMount() {
    if (!firebase.auth().currentUser) {
      this.$notify({
        group: "eastudy",
        title: "Heey!",
        text: "Necesitas iniciar sesión primero!",
        duration: 5000,
        type: "warn"
      });
    } else {
      this.show = true;
    }

    this.question.data.answers.filter(q => q.isTrue);
  },
  mounted() {
    this.userAnswer = this.question.data.answers[0].name;
  },
  methods: {
    changeActive() {
      this.active = !this.active;

      this.$parent.$emit("closeModal");
    },
    onChangeIsTrue(key) {
      this.question.data.answers[this.actualTrue].isTrue = false;
      this.question.data.answers[key].isTrue = true;
      this.actualTrue = key;
    },
    updateQuestion() {
      if (this.question.data.title && this.checkNullAnswers()) {
        const dbRef = firebase
          .database()
          .ref(`/questions/${this.question.uid}`);

        dbRef
          .set({
            title: this.question.data.title,
            content: this.question.data.content,
            answers: this.question.data.answers,
            category: this.question.data.category,
            experience: this.question.data.experience,
            isActive: this.question.data.isActive
          })
          .then(res => {
            this.$notify({
              group: "eastudy",
              title: "La pregunta se ha actualizado correctamente!",
              text: "Un administrador la validará en breve",
              duration: 5000,
              type: "success",
              classes: "notification-style"
            });
          })
          .catch(error => {
            this.$notify({
              group: "eastudy",
              title: "Ups!",
              text: "Ocurrió un error al guardar la pregunta, intenta después!",
              duration: 5000,
              type: "error",
              classes: "notification-style"
            });
          });

        this.changeActive();
      } else {
        this.$notify({
          group: "eastudy",
          title: "Ups!",
          text: "Debes de llenar todos los campos",
          duration: 5000,
          type: "error",
          classes: "notification-style"
        });
      }
    },
    checkNullAnswers() {
      return (
        this.question.data.answers[0].name &&
        this.question.data.answers[1].name &&
        this.question.data.answers[2].name &&
        this.question.data.category
      );
    }
  }
};
</script>
