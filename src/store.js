import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

firebase.initializeApp({
  apiKey: "AIzaSyD5YCXnqWky35U5KQv6y_YAqlza60RrpGo",
  authDomain: "noteapp-c0405.firebaseapp.com",
  databaseURL: "https://noteapp-c0405.firebaseio.com",
  projectId: "noteapp-c0405",
  storageBucket: "noteapp-c0405.appspot.com",
  messagingSenderId: "900321311281"
})

Vue.prototype.$firebase = firebase;

export default new Vuex.Store({
  state: {
    questions: []
  },
  getters: {
    questionByCategory(state) {
      return name => state.questions.filter(item => {
        return item.data.category == name
      })
    }
  },
  mutations: {
    updateQuestions(state, questions) {
      state.questions = questions;
    },
    deleteQuestion(state, question) {
      firebase.database().ref(`/questions/${question.uid}`).remove(res => {
        return res
      })
    }
  },
  actions: {
    SET_INIT_QUESTIONS({ commit }) {
      firebase.database().ref('/questions').on('value', res => {
        var q = [];

        res.forEach(snap => {
            q.push({
                uid: snap.key,
                data: snap.val()
            });
        });

        q.reverse();

        commit('updateQuestions', q)
      })
    }
  }
})
