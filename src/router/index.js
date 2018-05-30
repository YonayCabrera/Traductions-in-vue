import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Mangas from '@/components/Mangas'
import MangaDetail from '@/components/MangaDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mangas',
      name: 'Mangas',
      component: Mangas
    },
    {
      path: '/comic/:id',
      component: MangaDetail
    }
  ]
})
