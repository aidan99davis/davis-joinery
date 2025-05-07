import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'default',
        component: () => import(/* webpackChunkName: "parent" */ './components/navigation/NavParent.vue'),
        props: true,
        children: [
            {
                path: '',
                name: 'home',
                label: 'Home',
                component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
                props: true
            },
            {
                path: '/profile',
                name: 'profile',
                label: 'Profile',
                props: true,
                authRoute: true,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "schedule" */ './views/Schedule.vue')
            },
            {
                path: '/login',
                name: 'login',
                label: 'Login',
                props: true,
                authRoute: true,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "schedule" */ './views/Schedule.vue')
            },
            {
                path: 'schedule',
                name: 'schedule',
                label: 'Schedule',
                props: true,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "schedule" */ './views/Schedule.vue')
            },
            {
                path: 'timesheet',
                name: 'timesheet',
                label: 'Timesheet',
                props: true,
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "gallery" */ './views/Timesheets.vue')
            },
            {
                path: 'administration',
                label: 'Admin',
                component: () => import(/* webpackChunkName: "gallery" */ './components/Parent.vue'),
                children: [
                    {
                        path: 'clients',
                        name: 'clients',
                        label: 'Clients',
                        props: true,
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () => import(/* webpackChunkName: "gallery" */ './views/Clients.vue')
                    },
                    {
                        path: 'projects',
                        name: 'projects',
                        label: 'Projects',
                        props: true,
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () => import(/* webpackChunkName: "gallery" */ './views/Projects.vue')
                    },
                    {
                        path: 'staff',
                        name: 'staff',
                        label: 'Staff',
                        props: true,
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () => import(/* webpackChunkName: "gallery" */ './views/Staff.vue')
                    },
                    {
                        path: 'skills',
                        name: 'skills',
                        label: 'Skills',
                        props: true,
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () => import(/* webpackChunkName: "gallery" */ './views/Skills.vue')
                    }                    
                ]
            }
        ]
    },
  ];


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes

})

export {routes};
