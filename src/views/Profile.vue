<template>
    <div>
        <div class="card">
            <div class="card-content">
                <div class="columns">
                    <div class="is-one-third">
                        <img id="profile" :src="user.PhotoURL"/>
                    </div>
                    <div class="content">
                        <h1 class="title is-1">{{ user.DisplayName }}</h1>
                        <p><b>Email: </b> {{ user.Email }}</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="tabs">
            <ul>
                <li v-bind:class="{'is-active' : tabActive === 'activity'}" 
                    @click="changeTab('activity')">
                    <a>Actividad</a>
                </li>
                <li v-bind:class="{'is-active' : tabActive === 'questions'}" 
                    @click="changeTab('questions')">
                    <a>Preguntas</a>
                </li>
            </ul>
        </div>

        <div v-bind:class="{'hidden' : tabActive !== 'activity'}">
            <h2 class="subtitle is-2">Actividad</h2>
            <div v-for="activity in activities" :key="activity.id">
                <Activity :title="activity.data.title"
                    :content="activity.data.content"
                    :date="activity.data.date"
                    img="../assets/questionActivity.png"/>
                    <br>
            </div>
        </div>

        <div v-bind:class="{'hidden' : tabActive !== 'questions'}">
            <h2 class="subtitle is-2">Preguntas</h2>
            <div>
                <router-link v-for="question of questions" :key="question.uid" 
                    :to="`\/question\/${question.uid}`">
                    <br>
                    <p>{{ question.data.title }}</p>
                    <br>
                    <hr>
                </router-link>
            </div>
        </div>
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
            tabActive: 'activity',
            user: [],
            info: [],
            activities: new Array(),
            questions: new Array(),
        }
    },
    components: {
        Activity
    },
    methods: {
        changeTab(e) {
            if (this.tabActive === 'activity' && e === 'questions') {
                this.tabActive = 'questions';

                return;
            }

            if (this.tabActive === 'questions' && e === 'activity') {
                this.tabActive = 'activity';

                return;
            }

            console.log(e);

        }
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
    .hidden {
        display: none;
    }

    img {
        margin-right: 1em !important;
    }
</style>
