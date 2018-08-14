<template>
    <vs-card class="text-center">
        <vs-card-body>
            <h1>Inicia Sesión</h1>
            <br>
            <Login></Login>
        </vs-card-body>
    </vs-card>
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

