<template>
    <div>
        <modal-question v-if="displayQuestion" :question="questionModal"/>
        <h1 class="title is-1 has-text-centered">Preguntas recientes</h1>

        <div class="columns" v-for="question in questions" :key="question._id">
            <div v-for="q in question" :key="q.uid" class="column">
                <div class="card">
                    <span class="tag" 
                        :class="q.data.category == 'ciencias-naturales' ? 'is-primary' : 'is-danger'">
                        {{ q.data.category }}
                    </span>
                    <div class="card-content" @click="setModalQuestion(q)">
                        {{ q.data.title }}
                    </div>
                </div>
            </div>
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
        let questions = this.$store.state.questions;

        let arrays = [], size = 3;

        while (questions.length > 0)
            arrays.push(questions.splice(0, size))

        this.questions = arrays;
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
    .card {
        cursor: pointer;
    }
</style>
