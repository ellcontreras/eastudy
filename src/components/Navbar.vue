<template>
  <div class="hero is-white" v-if="$route.name == 'home' && $store.state.user">
    <div class="hero-head">
      <nav class="navbar">
        <div class="navbar-menu">
          <div class="navbar-end">
            <router-link to="/questions" class="navbar-item">Preguntas</router-link>
            <router-link to="/login" v-if="!$store.state.user" class="navbar-item">Iniciar Sesión</router-link>
            <router-link
              to="/add-question"
              v-if="$store.state.user"
              class="navbar-item"
            >Agregar pregunta</router-link>
            <router-link
              :to="'/profile/'+$store.state.user.uid"
              v-if="$store.state.user"
              class="navbar-item"
            >Perfil</router-link>
            <router-link to="/dashboard" class="navbar-item" v-if="$store.state.isAdmin">Dashboard</router-link>
            <div class="navbar-item" v-if="$store.state.user">
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
  <nav
    class="navbar is-white"
    v-else-if="$route.name == 'home'"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
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
          v-if="!$store.state.user"
          class="navbar-item"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Iniciar Sesión</router-link>
        <router-link
          to="/add-question"
          v-if="$store.state.user"
          class="navbar-item"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Agregar pregunta</router-link>
        <router-link
          :to="'/profile/'+$store.state.user.uid"
          v-if="$store.state.user"
          class="navbar-item"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Perfil</router-link>
        <router-link
          to="/dashboard"
          class="navbar-item"
          v-if="$store.state.isAdmin"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Dashboard</router-link>
        <div class="navbar-item" v-if="$store.state.user">
          <button @click="handleLogout()" class="button is-warning">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  </nav>
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
          v-if="!$store.state.user"
          class="navbar-item"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Iniciar Sesión</router-link>
        <router-link
          to="/add-question"
          v-if="$store.state.user"
          class="navbar-item"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Agregar pregunta</router-link>
        <router-link
          :to="'/profile/'+$store.state.user.uid"
          v-if="$store.state.user"
          class="navbar-item"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Perfil</router-link>
        <router-link
          to="/dashboard"
          class="navbar-item"
          v-if="$store.state.isAdmin"
          :class="{'has-text-grey-dark' : activeToggle}"
        >Dashboard</router-link>
        <div class="navbar-item" v-if="$store.state.user">
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
      activeToggle: false
    };
  },
  beforeMount() {
    this.$firebase.auth().onAuthStateChanged(user => {
      if (this.$store.state.user) {
        let loged = this.$store.state.user;

        let em = loged.user.email.split("@")[0];

        this.$firebase
          .database()
          .ref(`/admins/emails/${em}`)
          .on("value", r => {
            this.$store.dispatch(
              "SET_ADMIN",
              r.val() == $store.state.user.email
            );
          });
      }
    });
  },
  methods: {
    handleLogout() {
      this.$firebase
        .auth()
        .signOut()
        .then(res => {
          this.$notify({
            group: "eastudy",
            title: "Adioos!",
            text: "Te esperamos pronto!"
          });
        });

      this.$store.dispatch("SET_USER", null);
      this.$store.dispatch("SET_ADMIN", false);

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