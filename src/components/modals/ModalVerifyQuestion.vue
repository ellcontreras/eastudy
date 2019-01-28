<template>
  <div class="modal" :class="{'is-active': active}" v-show="show">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div
        class="hero"
        :class="question.data.category == 'ciencias-naturales' ? 'is-primary' : 'is-danger'"
      >
        <div class="hero-body">
          <h1 class="title is-1 has-text-centered">{{ question.data.title }}</h1>
          {{ question.data.content }}
          <br>
          <hr>
          <h3 class="subtitle is-3">Respuestas</h3>
          <div class="control">
            <label class="radio">
              <div v-for="answer in question.data.answers" :key="answer.id">
                <input type="radio" :name="answer.name" v-model="userAnswer" :value="answer.name">
                {{ answer.name }}
                <br>
              </div>
            </label>
          </div>
          <br>
          <button @click="checkAnswer()" class="button is-link">Validar</button>
        </div>
      </div>
    </div>
    <button @click="changeActive()" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "ModalVerifyQuestion",
  props: {
    question: Object
  },
  data() {
    return {
      active: true,
      userAnswer: "",
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
  },
  mounted() {
    this.userAnswer = this.question.data.answers[0].name;
  },
  methods: {
    changeActive() {
      this.active = !this.active;

      this.$parent.$emit("closeModal");
    },
    checkAnswer() {
      let correctAnswer = this.question.data.answers.filter(
        answer => answer.isTrue
      )[0];

      if (this.userAnswer == correctAnswer.name) {
        this.$notify({
          group: "eastudy",
          title: "Correcto!",
          text: "Bien sigue así!",
          duration: 5000,
          type: "success"
        });

        let uid = this.$firebase.auth().currentUser.uid;
        const dbRef = this.$firebase.database().ref(`/users/${uid}`);

        var updates = {};
        dbRef.on("value", r => {
          console.log("val", r.val());

          let actualExperience = r.val().experience;

          updates["experience"] = actualExperience + this.question.experience;

          this.$firebase
            .database()
            .ref()
            .update(updates);
        });

        this.$firebase.database().update(updates);
      } else {
        this.$notify({
          group: "eastudy",
          title: "Ups!",
          text: "La respuesta es incorrecta!",
          duration: 5000,
          type: "error"
        });
      }

      this.changeActive();
    }
  }
};
</script>
