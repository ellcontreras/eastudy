<template>
    <div>
        <modal-edit-question v-if="isActiveEditQuestion" :question="questionEdit"></modal-edit-question>
        <div class="columns">
            <div class="column is-3 ">
                <menu-dashboard></menu-dashboard>
            </div>
            <div class="column is-9">
                <div class="hero is-primary">
                    <div class="hero-body">
                        <h2 class="title is-2 has-text-centered">Lista de preguntas</h2>
                    </div>
                </div>

                <hr>

                <ul class="menu-list">
                    <li v-for="question of $store.state.questions" :key="question.uid">
                        <a>
                            {{ question.data.title }} <br>
                            <button class="button is-danger" @click="$store.commit('deleteQuestion', question)">Borrar</button>
                            <button class="button is-warning" @click="displayQuestion(question)">Modificar</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import MenuDashboard from './MenuDashboard.vue'
import ModalEditQuestion from '../modals/ModalEditQuestion.vue'

export default {
    name: 'ViewQuestions',
    components: { MenuDashboard, ModalEditQuestion },
    data() {
        return {
            questions: ['123123', '12341234', '12341234', '12341234'],
            isActiveEditQuestion: false,
            questionEdit: []
        }
    },
    created() {
        this.$on('closeModal', () => {
            this.isActiveEditQuestion = false;
        });
    },
    methods: {
        displayQuestion(q) {
            this.isActiveEditQuestion = !this.isActiveEditQuestion

            this.questionEdit = q
        }
    }
}
</script>
