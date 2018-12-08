<template>
  <div id="app">
    <Navbar />
    <div class="container" id="main-container" v-if="$route.name !== 'home'">
        <transition name="fade">
          <router-view/>
        </transition>
    </div>
    <transition name="fade" v-else>
      <router-view/>
    </transition>
    <page-footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    PageFooter
  },
  data() {
    return {
      u: []
    }
  },
  beforeUpdate() {
    this.$store.dispatch('SET_INIT_QUESTIONS')

    if (this.$firebase.auth().currentUser) {
      let em = this.u.email.split('@')[0]
      this.$firebase.database().ref(`/admins/emails/${em}`).on('value', r => {
        if (r.val() == this.u.email) {
          this.$store.dispatch('SET_INIT_QUESTIONS_ADMIN')
        }
      })
    }
  },
  created() {
    this.$firebase.auth().onAuthStateChanged(u => {
      this.$router.push('/');

      this.u = u

      let em = this.u.email.split('@')[0]
      this.$firebase.database().ref(`/admins/emails/${em}`).on('value', r => {
        if (r.val() == this.u.email) {
          this.$store.dispatch('SET_INIT_QUESTIONS_ADMIN')
        }
      })
    });

    this.$firebase.database().ref('/questions').on('child_added', res => {
      let questions = [];

      res.forEach(snap => {
          questions.push({
              uid: snap.key,
              data: snap.val()
          });
      });

      questions.reverse();

      this.$store.commit('updateQuestions', questions);
    })
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
