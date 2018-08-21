<template>
    <div>
        <h1 class="text-center">Añadir Pregunta</h1>
        <vs-row>
            <vs-col vs-w="6">
                <label>Titulo</label>
                <input type="text" v-model="title" placeholder="De que color es el caballo de napoleon?"/>
                <br><br>
                <label>Categoria</label>
                <vs-select v-model="category">
                    <vs-select-item vs-value="ciencias-naturales" vs-text="Ciencias Naturales"/>
                    <vs-select-item vs-value="matematicas" vs-text="Matemáticas"/>
                </vs-select>
                <br><br>
                <label>Contenido</label>
                <textarea v-model="content" placeholder="Habia un caballo bonito..."></textarea>
            </vs-col>
        </vs-row>
        <vs-divider>
            <h2>Respuestas</h2>
        </vs-divider>
        <vs-row>
            <vs-col vs-w="6">
                <div v-for="answer in answers" :key="answer.id">
                    <input type="text" v-model="answer.name" 
                        placeholder="El caballo se llama viernes"/>
                        <br>
                    <vs-checkbox @change="onChangeIsTrue(answer.id)" v-model="answer.isTrue">Es la respuesta correcta?</vs-checkbox>
                    <br><br>
                </div>            
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col vs-w="6" class="text-left">
                <vs-button @click="uploadQuestion()" vs-color="secondary">Subir</vs-button>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'AddQuestion',
    data () {
        return {
            title: '',
            content: '',
            category: '',
            answers: [
                {id: 0, name: '', isTrue: true},
                {id: 1, name: '', isTrue: false},
                {id: 2, name: '', isTrue: false}
            ],
            actualTrue: 0
        }
    },
    methods: {
        onChangeIsTrue (key) {
            this.answers[this.actualTrue].isTrue = false
            this.answers[key].isTrue = true
            this.actualTrue = key
        },

        uploadQuestion () {
            if (this.title && this.checkNullAnswers()) {
                const dbRef = firebase.database().ref('/questions/').push()

                dbRef.set({
                    title: this.title,
                    content: this.content,
                    answers: this.answers,
                    category: this.category
                }).then(res => {
                    this.$vs.notify({
                        title: 'Exito!',
                        text: 'La pregunta se ha agregado correctamente',
                        color: 'success'
                    })

                    this.$router.push(`/question/${dbRef.key}`)
                }).catch(error => {
                    console.log(error)
                    this.$vs.notify({
                        title: 'Error message',
                        text: error.message,
                        color: 'danger'
                    })
                })

                firebase.firestore().collection('userActivity').add({
                    content: "Ha agregado una nueva pregunta",
                    date: new Date(),
                    title: "Creación de pregunta",
                    uid: firebase.auth().currentUser.uid
                }).then(res => {
                    console.log(res);
                }).catch(error => {
                    console.log(error);
                });
            } else {
                this.$vs.notify({
                    title: 'Alerta',
                    text: 'No debes de dejar las respuestas, el titulo ni la categoria en blanco',
                    color: 'warning'
                })
            }
        },

        checkNullAnswers () {
            return this.answers[0].name && this.answers[1].name && this.answers[2].name && this.category
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
    .con-vs-checkbox {
        display: flex;
        justify-content: flex-start;
    }
</style>

