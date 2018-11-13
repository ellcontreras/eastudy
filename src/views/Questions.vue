<template>
    <div>
        <modal-question v-if="displayQuestion" :question="questionModal"/>
        <h1 class="title is-1 has-text-centered">Preguntas recientes</h1>
        <div class="menu">
            <ul class="menu-list">
                <li v-for="question of questions" :key="question.uid"
                    @click="setModalQuestion(question)">
                    <a>
                        <p>{{ question.data.title }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
import firebase from 'firebase';
import ModalQuestion from '@/components/ModalQuestion.vue'

export default {
    name: 'Questions',
    components: {ModalQuestion},
    data() {
        return {
            questions: [],
            displayQuestion: false,
            questionModal: []
        }
    },
    created() {
        this.$on('closeModal', () => {
            this.displayQuestion = false;
        });
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
    },
    methods: {
        setModalQuestion(question) {
            this.displayQuestion = true;
            this.questionModal = question;
        }
    }
}
</script>

<style scoped>
    a {
        color: #5b5777 !important;
    }
</style>
