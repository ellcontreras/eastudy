<template>
	<vs-topbar vs-color="primary">
		<div style="justify-content: flex-start">
			<h2>
				<router-link to='/'>
					<img id="logo" src="../assets/logo.png" alt="">
				</router-link>
			</h2>
		</div>
		<div style="justify-content: flex-end;">
			<router-link to="/questions">
				<vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >Preguntas</vs-button>
			</router-link>
			<vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >Quiz</vs-button>
			<router-link to='/login' v-if="!loged">
				<vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >
					Iniciar Sesión
				</vs-button>
			</router-link>
			<router-link :to="'/profile/'+loged.uid" v-if="loged">
				<vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >
					Perfil
				</vs-button>
			</router-link>
			<vs-button @click="handleLogout()" v-if="loged" vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >
				Cerrar Sesión
			</vs-button>
		</div>
	</vs-topbar>
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
