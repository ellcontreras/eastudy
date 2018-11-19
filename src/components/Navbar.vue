<template>
	<div class="hero is-primary is-medium" v-if="$route.name == 'home'">
		<div class="hero-head">
			<nav class="navbar">
				<div class="navbar-menu">
					<div class="navbar-end">
						<router-link to="/questions" class="navbar-item">
							Preguntas
						</router-link>
						<router-link to='/login' v-if="!loged" class="navbar-item">
							Iniciar Sesión
						</router-link>
						<router-link to="/add-question" v-if="loged" class="navbar-item">
							Agregar pregunta
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
		</div>
		<div class="hero-body has-text-centered">
			<img id="logoHome" src="../assets/logo.png" alt="">
		</div>
	</div>
	<nav class="navbar is-primary" v-else>
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
				<router-link to="/add-question" v-if="loged" class="navbar-item">
					Agregar pregunta
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
			this.$toasted.show('Adiooooos!', {
				theme: "bubble", 
				position: "bottom-right", 
				duration : 5000
			})
		  })

		  this.$forceUpdate()
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
