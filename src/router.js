import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Parent from '@/components/navigation/Parent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'default',
        component: Parent,
        props: true,
        children: [
            {
                path: '',
                name: 'home',
                component: Home,
                props: true
            },
            {
                path: '/about',
                name: 'about',
                props: true,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
            },
            {
                path: '/contact',
                name: 'contact',
                props: true,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
            },
            {
                path: '/schedule',
                name: 'schedule',
                props: true,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/Schedule.vue')
            }
        ]
    },

  ]
})
