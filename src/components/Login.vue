<template>
    <div>
        <vs-button vs-color="danger" @click="handleLogin()">
            Iniciar Sesión con Google
        </vs-button>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'LoginComponent',
    methods: {
        handleLogin () {
            const provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider).then(res => {
                console.log(res.user);
                this.$vs.notify({
                    title: `Bienvenido ${res.user.displayName}!`,
                    text: 'Es un gusto tenerte aqusi de nuevo :3',
                    color: 'success'
                })

                this.$router.push('/')
                this.$emit('changeLogin')
            }).catch(error => {
                this.$vs.notify({
                    title: 'Error',
                    text: error.message,
                    color: 'danger'
                })
            });
        }
    }
}
</script>

