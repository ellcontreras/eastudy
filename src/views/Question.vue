<template>
    <div>
        <h1 class="text-center">{{ title }}</h1>
        <vs-row>
            <vs-col vs-w="6">
                <label>{{ category | categorize }}</label>
                <br><br>
                <label>Contenido</label>
                {{ content }}
            </vs-col>
        </vs-row>
        <vs-divider>
            <h2>Respuestas</h2>
        </vs-divider>
        <vs-row>
            <vs-col vs-w="6">
                <vs-radio v-model="userAnswer" v-for="answer in answers" :vs-value="answer.name" :key="answer.id">
                    {{ answer.name }}
                </vs-radio>         
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col vs-w="6" class="text-left">
                <vs-button @click="checkAnswer()" vs-color="secondary">Verificar</vs-button>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Question',
    data () {
        return {
            title: '',
            content: '',
            category: '',
            answers: [],
            userAnswer: ''
        }
    },
    beforeCreate () {
        firebase.database().ref(`/questions/${this.$route.params.uid}`).on('value', snap => {
            this.title = snap.val().title
            this.content = snap.val().content
            this.category = snap.val().category
            this.answers = snap.val().answers

            this.userAnswer = this.answers[0].name
        })
    },
    filters: {
        categorize (category) {
            switch (category) {
                case 'ciencias-naturales':
                    return 'Ciencias Naturales'
                case 'matematicas':
                    return 'Matemáticas'
            }
        }
    },
    methods: {
        checkAnswer () {
            let correctAnswer = this.answers.filter(answer => answer.isTrue)[0]

            if (this.userAnswer == correctAnswer.name) {
                this.$vs.notify({
                    title: 'Correcto!',
                    text: 'Has adivinado la respuesta correcta!',
                    color: 'success'
                })
            } else {
                this.$vs.notify({
                    title: 'Ups!',
                    text: 'Has fallado, intenta de nuevo',
                    color: 'danger'
                })
            }
        }
    }
}
</script>

<style scoped>
    .vs-row {
        display: flex;
        justify-content: center;
    }
    h1 {
        margin-bottom: .5em;
    }
    .con-vs-radio {
        display: flex;
        justify-content: flex-start;
    }
</style>


