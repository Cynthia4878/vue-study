import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import List from '@/components/List'
// import Found from '@/components/404'
const Home = () => import( '@/components/Home')
const About = () => import( '@/components/About')
const List = () => import( '@/components/List')
const Found = () => import( '@/components/404')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'About',
      props: true ,
      component: About,
      children:[{
        path: 'list',
        component: List,
        meta:{requiresAuth: true}
      }]
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '*',
      name: '404',
      component: Found
    }
  ]
})
