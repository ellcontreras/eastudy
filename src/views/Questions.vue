<template>
    <div>
        <h1 class="text-center">Preguntas recientes</h1>
        <vs-list>
            <router-link v-for="question of questions" :key="question.uid" 
                :to="`\/question\/${question.uid}`">
                <br>
                <vs-list-item :vs-title="question.data.title"></vs-list-item>
                <br>
                <hr>
            </router-link>
        </vs-list>
    </div>    
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Questions',
    data() {
        return {
            questions: []
        }
    },
    beforeMount() {
        firebase.database().ref('/questions').on('value', res => {
            res.forEach(snap => {
                this.questions.push({
                    uid: snap.key,
                    data: snap.val()
                });
            });

            this.questions.reverse();

        }, error => {
            this.$vs.notify({
                title: 'Error',
                message: error.message,
                color: 'danger'
            });
        });
    }
}
</script>

<style scoped>
    a {
        color: #5b5777 !important;
    }
</style>

