import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

import 'material-icons/iconfont/material-icons.css'

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

Vue.use(Vuesax, {
  theme:{
    colors:{
      primary:'#5b3cc4',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'rgb(36, 33, 69)',
      green: '#45bf55',
      yellow: '#edad1e',
      blue: '#4472c4'
    }
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
