<template>
    <div class="card has-text-centered">
        <div class="card-content">
            <h1 class="title is-1">Inicia Sesión</h1>
            <br>
            <Login></Login>
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

