<template>
	<vs-topbar vs-color="primary">
		<div style="justify-content: flex-start">
			<h2>
				<router-link to='/'>Eastudy</router-link>
			</h2>
		</div>
		<div style="justify-content: flex-end;">
			<vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >Preguntas</vs-button>
			<vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >Quiz</vs-button>
		</div>
	</vs-topbar>
</template>

<script>
export default {
  name: 'Navbar'
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
</style>
