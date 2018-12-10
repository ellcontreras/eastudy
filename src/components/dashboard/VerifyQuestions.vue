<template>
    <div>
        <modal-verify-question v-if="displayQuestion" :question="questionModal"></modal-verify-question>
        <div class="columns">
            <div class="column is-3 ">
                <menu-dashboard></menu-dashboard>
            </div>
            <div class="column is-9">
                <div class="hero is-primary">
                    <div class="hero-body">
                        <h2 class="title is-2 has-text-centered">Verificar preguntas</h2>
                    </div>
                </div>

                <hr>

                <ul class="menu-list">
                    <li v-for="question of questions" :key="question.uid">
                        <a @click="setModalQuestion(question)">
                            {{ question.data.title }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import MenuDashboard from './MenuDashboard.vue'
import ModalVerifyQuestion from '../modals/ModalVerifyQuestion.vue'

export default {
    name: 'ViewQuestions',
    components: { MenuDashboard, ModalVerifyQuestion },
    data() {
        return {
            questions: ['123123', '12341234', '12341234', '12341234'],
            displayQuestion: false,
            questionModal: [],
            questions: []
        }
    },
    created() {
        this.$on('closeModal', () => {
            this.displayQuestion = false;
        });
    },
    beforeMount() {
        this.$firebase.database().ref('/questions').orderByChild('isActive')
        .equalTo(false).on('value', res => {
            var q = [];

            res.forEach(snap => {
                q.push({
                    uid: snap.key,
                    data: snap.val()
                });
            });

            q.reverse();

            this.questions = q
        })
    },
    methods: {
        setModalQuestion(question) {
            this.displayQuestion = true;
            this.questionModal = question;
        }
    }
}
</script>
