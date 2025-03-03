<template>
    <div>
        <b-navbar class="navbar navbar-expand-sm navigation-body navbar-dark" sticky>
            <nav-link to="/" :label="'Amelia Joinery Ltd'"></nav-link>
            <b-navbar-nav>
                <div v-for="link in nonAuthRoutes" :key="link.name">
                    <b-nav-item v-if="link.children === undefined" :to="{name: link.name}" :label="link.label">{{ link.label }}</b-nav-item>
                    <b-nav-item-dropdown v-else :text="link.label">
                        <b-dropdown-item v-for="child in link.children" :to="{name: child.name}" :key="child.name">{{child.label}}</b-dropdown-item>
                    </b-nav-item-dropdown>
                    
                </div> 
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto" style="margin-right: 2.5%;">
                <b-nav-item-dropdown right>
                    <template #button-content>
                        <em>User</em>
                    </template>
                    <div v-if="authenticated">
                        <b-dropdown-item :to="{name: 'profile'}">Profile</b-dropdown-item>
                        <b-dropdown-item :to="{name: ''}">Log Out</b-dropdown-item>
                    </div>
                    <b-dropdown-item v-else :to="{name: 'login'}">Log In</b-dropdown-item>

                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
        <slot></slot>
    </div>

</template>

<script>
    import NavLink from './navlink'
    import {routes} from '../../router.js'
    export default {
        name: "navbar",
        props: ['pages'],
        components: {
            NavLink
        },
        afterMount() {
            console.log(this.routes)
        },
        computed: {
            nonAuthRoutes: function() {
                var toReturn = new Array();
                this.routes.forEach(element => {
                    if(!element.authRoute) {
                        toReturn.push(element);
                    }
                });
                return toReturn;
            }
        },
        data() {
            console.log(routes[0])
            return {
                routes: routes[0].children,
                authenticated: false,
                userGroup: 'management'
            }
        }
    }
</script>

<style scoped>
    .navigation-body {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        width: 100%;
        background-color: #FE5F55;
    }
</style>