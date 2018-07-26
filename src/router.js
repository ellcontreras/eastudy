import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddQuestion from './views/Add-question.vue'
import Question from './views/Question'
import PageNotFound from './views/PageNotFound'

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
