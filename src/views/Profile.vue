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
                        :date="activity.data.date" />
                </div>
            </vs-tab>
            <vs-tab vs-label="Preguntas">
                <h2>Preguntas</h2>
                <div>
                    {{ questions | isNull }}
                </div>
            </vs-tab>
        </vs-tabs>
    </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import Activity from '@/components/Activity'
import url from '../utils/utils'

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
    beforeCreate () {
        axios.get(`${url.url}api/user/get/${this.$route.params.uid}`).then(res => {
            this.user = res.data.user
        }).catch(error => {
            console.log(error)
        })

        try {
            this.uid = this.$route.params.uid
            const db = firebase.firestore()
            const settings = {timestampsInSnapshots: true}
            db.settings(settings)

            var activityRef = db.collection('userActivity')

            activityRef.where('uid', "==", this.uid).get().then(res => {
                res.forEach(res => {
                    this.activities.push({
                        id: res.id,
                        data: res.data()
                    })
                })
            }).catch(error => {
                console.log(error)
            })
        } catch(error) {
            console.log("Error:", error)
        }
    },
    filters: {
        isNull (obj) {
            if (obj.length === 0) {
                return "No se ha encontrado nada"
            } else {
                return obj
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
