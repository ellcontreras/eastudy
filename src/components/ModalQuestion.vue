<template>
    <div class="modal" :class="{'is-active': active}" v-show="show">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="hero" 
                :class="question.data.category == 'ciencias-naturales' ? 'is-primary' : 'is-danger'">
                <div class="hero-body">
                    <h1 class="title is-1 has-text-centered">
                        {{ question.data.title }}
                    </h1>
                    {{ question.data.content }}
                    <br>
                    <hr>
                    <h3 class="subtitle is-3">Respuestas</h3>
                    <div class="control">
                        <label class="radio">
                            <div v-for="answer in question.data.answers" :key="answer.id">
                                <input type="radio" :name="answer.name" v-model="userAnswer"
                                :value="answer.name"> {{ answer.name }}<br>
                            </div>
                        </label>
                    </div>
                    <br>
                    <button @click="checkAnswer()" class="button is-link">Validar</button>
                </div>
            </div>
        </div>
        <button @click="changeActive()"
            class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'ModalQuestion',
    props: {
        question: Object,
    },
    data() {
        return {
            active: true,
            userAnswer: '',
            show: false
        }
    },
    beforeMount() {
        if (!firebase.auth().currentUser) {
            this.$toasted.show('Necesitas iniciar sesión primero!', {
                theme: "bubble", 
                position: "bottom-right", 
                duration : 5000
            })
        } else {
            this.show = true;
        }
    },
    mounted() {
        this.userAnswer = this.question.data.answers[0].name;
    },
    methods: {
        changeActive() {
            this.active = !this.active;

            this.$parent.$emit('closeModal');
        },
        checkAnswer() {
            let correctAnswer = this.question.data.answers
                .filter(answer => answer.isTrue)[0];

            if (this.userAnswer == correctAnswer.name) {
                this.$toasted.show('correcto!', {
                    theme: "bubble", 
                    position: "bottom-right", 
                    duration : 5000
                })

                let uid = this.$firebase.auth().currentUser.uid
                const dbRef = this.$firebase.database().ref(`/users/${uid}`)

                var updates = {}
                dbRef.on('value', r => {
                    console.log("val", r.val())

                    let acExp = r.val().experience

                    updates['experience'] = acExp + this.question.experience
                
                    this.$firebase.database().ref().update(updates)
                })

                this.$firebase.database().update(updates)
            } else {
                this.$toasted.show('incorrecto!', {
                    theme: "primary", 
                    position: "bottom-right", 
                    duration : 5000
                })
            }

            this.changeActive();
        }
    }
}
</script>
