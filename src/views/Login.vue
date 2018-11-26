<template>
    <div class="hero is-large">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h2 class="title is-2">Iniciar Sesión</h2>
                <Login />
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import Login from '@/components/Login.vue'

export default {
    name: 'LoginView',
    components: {
        Login
    },
    beforeCreate () {
        if (firebase.auth().currentUser) {
            this.$router.push('/')
        }
    }
}
</script>
