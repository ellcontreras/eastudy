<template>
    <div>
        <modal-question v-if="displayQuestion" :question="questionModal"/>

        <div class="hero is-medium" 
            :class="slug == 'ciencias-naturales' ? 'is-primary' : 'is-danger'">
            <div class="hero-body">
                <h1 class="title is-1 has-text-centered">{{ category }}</h1>
            </div>
        </div>

        <br>
        <h2 class="subtitle is-2">Preguntas de esta categoria</h2>
        <div v-if="!questions.length">
            Aún no hay preguntas!
        </div>

        <div class="columns" v-for="question in questions" :key="question._id">
            <div v-for="q in question" :key="q.uid" class="column">
                <div class="card"> 
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
import ModalQuestion from '../components/ModalQuestion.vue';

export default {
    name: 'categoryview',
    components: {ModalQuestion},
    data() {
        return {
            category: this.$route.params.name,
            slug: "",
            questions: new Array(),
            displayQuestion: false,
            questionModal: []
        }
    },
    beforeMount() {
        switch (this.category) {
            case 'Matemáticas':
                this.slug = "matematicas";
                break;
            case "Ciencias Naturales":
                this.slug = "ciencias-naturales";
                break;
        }

        firebase.database().ref('/questions').orderByChild("category").equalTo(this.slug).on('value', res => {
            res.forEach(snap => {
                this.questions.push({
                    uid: snap.key,
                    data: snap.val()
                });
            });

            let arrays = [], size = 3;

            while (this.questions.length > 0)
                arrays.push(this.questions.splice(0, size));

            this.questions = arrays;
        });
    },
    created() {
        this.$on('closeModal', () => {
            this.displayQuestion = false;
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
    .card {
        cursor: pointer;
    }
</style>
