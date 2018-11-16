<template>
    <div>
        <button class="button is-danger" @click="handleLogin()">
            Iniciar Sesión con Google
        </button>
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
                this.$toasted.show(`Bienvenido ${res.user.displayName}!`, {
                    theme: "bubble", 
                    position: "bottom-right", 
                    duration : 5000
                })

                this.$router.push('/')
                this.$emit('changeLogin')
            }).catch(error => {
                this.$toasted.show(`Error ${error.message}!`, {
                    theme: "bubble", 
                    position: "bottom-right", 
                    duration : 5000
                })
            });
        }
    }
}
</script>
