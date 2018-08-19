import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddQuestion from './views/Add-question.vue'
import Question from './views/Question.vue'
import Questions from './views/Questions.vue'
import PageNotFound from './views/PageNotFound.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile/:uid',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add-question',
      name: 'add question',
      component: AddQuestion
    },
    {
      path: '/question/:uid',
      name: 'question view',
      component: Question
    },
    {
      path: '/questions',
      name: 'questions view',
      component: Questions
    },
    {
      path: '/404',
      name: '404 Page not found',
      component: PageNotFound
    },
    {
      path: '*',
      name: '404 Page not found',
      component: PageNotFound
    }
  ]
})
