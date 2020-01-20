import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'default',
        component: () => import(/* webpackChunkName: "parent" */ './components/navigation/Parent.vue'),
        props: true,
        children: [
            {
                path: '',
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
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
                component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
            },
            {
                path: '/schedule',
                name: 'schedule',
                props: true,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "schedule" */ './views/Schedule.vue')
            },
            {
                path: '/gallery',
                name: 'gallery',
                props: true,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "gallery" */ './views/Gallery.vue')
            }
        ]
    },

  ]
})
