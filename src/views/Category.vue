<template>
    <div>
        <h1 class="text-center">{{ category }}</h1>
        <br>
        <h2>Preguntas de esta categoria</h2>
        <div v-if="!questions.length">
            Aún no hay preguntas!
        </div>
        <router-link v-for="question of questions" :key="question.uid" 
            :to="`\/question\/${question.uid}`">
            <br>
            <div class="tr" :vs-title="question.data.title"></div>
            <br>
            <hr>
        </router-link>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'categoryview',
    data() {
        return {
            category: this.$route.params.name,
            slug: "",
            questions: new Array()
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
        });
    }
}
</script>
