<template>
    <div>
        <vs-card>
            <vs-card-body>
                <vs-row>
                    <vs-col vs-w="3">
                        <img id="profile" :src="user.PhotoURL"/>
                    </vs-col>
                    <vs-col vs-w="9" class="content">
                        <h1>{{ user.DisplayName }}</h1>
                    </vs-col>
                </vs-row>
            </vs-card-body>
        </vs-card>
        <vs-tabs>
            <vs-tab vs-label="Actividad">
                <h2>Actividad</h2>
                <div v-for="activity in activities" :key="activity.id">
                    <Activity :title="activity.data.title"
                        :content="activity.data.content"
                        :date="activity.data.date"
                        img="../assets/questionActivity.png"/>
                        <br>
                </div>
            </vs-tab>
            <vs-tab vs-label="Preguntas">
                <h2>Preguntas</h2>
                <vs-list>
                    <router-link v-for="question of questions" :key="question.uid" 
                        :to="`\/question\/${question.uid}`">
                        <br>
                        <vs-list-item :vs-title="question.data.title"></vs-list-item>
                        <br>
                        <hr>
                    </router-link>
                </vs-list>
            </vs-tab>
        </vs-tabs>
    </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import Activity from '@/components/Activity'
import url from '../utils/utils.js';

export default {
    name: 'Profile',
    data () {
        return {
            uid: "",
            user: [],
            info: [],
            activities: new Array(),
            questions: new Array(),
        }
    },
    components: {
        Activity
    },
    beforeMount () {
        this.uid = this.$route.params.uid;

        axios.get(`${url.url}api/user/get/${this.uid}`).then(res => {
            this.user = res.data.user;
        }).catch(error => {
            console.log(error);
        });

        firebase.database().ref('/questions').orderByChild('userUID').equalTo(this.uid).on('value', res => {
            res.forEach(snap => {
                this.questions.push({
                    uid: snap.key,
                    data: snap.val()
                });

                if (!snap.val().title.includes("question") || !snap.val().title.includes("pregunta")) {
                    this.questions[this.questions.length - 1].data.img = "../assets/questionActivity.png";
                    console.log(this.questions[0].data);
                }
            });
        });

        try {
            const db = firebase.firestore();
            const settings = {timestampsInSnapshots: true};
            db.settings(settings);

            var activityRef = db.collection('userActivity');

            activityRef.where('uid', "==", this.uid).get().then(res => {
                res.forEach(res => {
                    this.activities.push({
                        id: res.id,
                        data: res.data()
                    });
                });

                this.activities.reverse();
            }).catch(error => {
                console.log(error);
            })
        } catch(error) {
            console.log("Error:", error);
        }
    },
    filters: {
        isNull (obj) {
            if (obj.length === 0) {
                return "No se ha encontrado nada";
            } else {
                return obj;
            }
        }
    }
}
</script>

<style scoped>
    img#profile {
        margin-top: 1vw;
        width: 15vw;
        border-radius: 2%;
    }

    .content {
        margin-top: 1vw;
    }
</style>
