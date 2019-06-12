import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GenreBox from '@/components/GenreBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GenreBox',
      component: GenreBox
    }
  ]
})
