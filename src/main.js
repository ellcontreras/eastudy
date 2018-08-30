import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import 'bulma/css/bulma.min.css'
import 'material-icons/iconfont/material-icons.css'
import 'animate.css/animate.min.css'

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyD5YCXnqWky35U5KQv6y_YAqlza60RrpGo",
  authDomain: "noteapp-c0405.firebaseapp.com",
  databaseURL: "https://noteapp-c0405.firebaseio.com",
  projectId: "noteapp-c0405",
  storageBucket: "noteapp-c0405.appspot.com",
  messagingSenderId: "900321311281"
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
