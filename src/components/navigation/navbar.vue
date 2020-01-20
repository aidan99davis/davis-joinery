<template>
    <nav class="navbar navbar-expand-sm navigation-body navbar-dark">
    <nav-link to="/" :label="'Artisan Shopfitting and Joinery Ltd'"></nav-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
        <li v-for="link in pages">
            <nav-link :to="link.to" :label="link.label"></nav-link>
        </li>  
        </ul>
    </div>  
    </nav>
</template>

<script>
    import NavLink from './navlink'
    export default {
        name: "navbar",
        props: ['pages'],
        components: {
            NavLink
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