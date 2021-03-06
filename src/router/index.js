import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Mywork from '@/components/Mywork'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/mywork',
      name: 'MyWork',
      component: Mywork
    }
  ]
})
