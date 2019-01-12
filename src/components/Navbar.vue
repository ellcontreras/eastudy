<template>
  <div class="hero is-light" v-if="$route.name == 'home' && $firebase.auth().currentUser">
    <div class="hero-head">
      <nav class="navbar">
        <div class="navbar-menu">
          <div class="navbar-end">
            <router-link to="/questions" class="navbar-item">Preguntas</router-link>
            <router-link to="/login" v-if="!loged" class="navbar-item">Iniciar Sesión</router-link>
            <router-link to="/add-question" v-if="loged" class="navbar-item">Agregar pregunta</router-link>
            <router-link :to="'/profile/'+loged.uid" v-if="loged" class="navbar-item">Perfil</router-link>
            <router-link to="/dashboard" class="navbar-item" v-if="isAdmin">Dashboard</router-link>
            <div class="navbar-item" v-if="loged">
              <button @click="handleLogout()" class="button is-warning">Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="has-text-centered">
      <Logo/>
    </div>
    <hr>
  </div>
  <nav class="navbar is-light" v-else role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link @click="$router.push('/')" to="/home" class="navbar-item">
        <Logo where="navbar"/>
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="makeActiveNavbar()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active' : activeToggle}">
      <div class="navbar-end">
        <router-link
          to="/questions"
          class="navbar-item"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Preguntas</router-link>
        <router-link
          to="/login"
          v-if="!loged"
          class="navbar-item"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Iniciar Sesión</router-link>
        <router-link
          to="/add-question"
          v-if="loged"
          class="navbar-item"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Agregar pregunta</router-link>
        <router-link
          :to="'/profile/'+loged.uid"
          v-if="loged"
          class="navbar-item"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Perfil</router-link>
        <router-link
          to="/dashboard"
          class="navbar-item"
          v-if="isAdmin"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Dashboard</router-link>
        <div class="navbar-item" v-if="loged">
          <button @click="handleLogout()" class="button is-warning">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: "Navbar",
  components: { Logo },
  data() {
    return {
      loged: this.$firebase.auth().currentUser,
      isAdmin: false,
      activeToggle: false
    };
  },
  beforeMount() {
    this.$firebase.auth().onAuthStateChanged(
      user => {
        this.loged = this.$firebase.auth().currentUser;

        let em = this.loged.email.split("@")[0];

        this.$firebase
          .database()
          .ref(`/admins/emails/${em}`)
          .on("value", r => {
            this.isAdmin = r.val() == this.loged.email;
          });
      },
      error => {
        console.log(error.message);
      }
    );
  },
  methods: {
    handleLogout() {
      this.$firebase
        .auth()
        .signOut()
        .then(res => {
          this.$toasted.show("Adiooooos!", {
            theme: "bubble",
            position: "bottom-right",
            duration: 5000
          });
        });

      this.$forceUpdate();
    },
    makeActiveNavbar() {
      this.activeToggle = !this.activeToggle;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
}
a:hover {
  color: rgb(200, 200, 200);
}
</style>