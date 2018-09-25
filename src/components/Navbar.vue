<template>
	<nav class="navbar">
		<div class="navbar-brand">
			<router-link to='/'>
				<img id="logo" src="../assets/logo.png" alt="">
			</router-link>
		</div>
		<div class="navbar-menu">
			<div class="navbar-end">
				<router-link to="/questions" class="navbar-item">
					Preguntas
				</router-link>
				<router-link to='/login' v-if="!loged" class="navbar-item">
					Iniciar Sesión
				</router-link>
				<router-link :to="'/profile/'+loged.uid" v-if="loged" class="navbar-item">
					Perfil
				</router-link>
				<div class="navbar-item" v-if="loged">
					<button @click="handleLogout()" class="button is-warning">
						Cerrar Sesión
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data() {
	  return {
		  loged: firebase.auth().currentUser
	  }
  },
  beforeMount() {
	  firebase.auth().onAuthStateChanged(user => {
		  this.loged = firebase.auth().currentUser
	  }, error => {
		  console.log(error.message)
	  })
  },
  methods: {
	  handleLogout() {
		  firebase.auth().signOut().then(res => {
			  this.$vs.notify({
				  title: "Vuelve pronto",
				  text: "Esperamos que vuelvas pronto!",
				  color: "success"
			  })
		  })

		  this.$forceUpdate()
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	nav {
		background-color: #1d97c1;
	}
	a {
		color: white;
	}
	a:hover {
		color: rgb(200, 200, 200);
	}
	#logo {
		width: 200px;
	}
</style>
