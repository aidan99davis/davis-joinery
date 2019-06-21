<template>
    <div class="navigation-body">
        <div v-for="link in pages" class="navigation-item">
            <nav-link :to="link.to" :label="link.label"></nav-link>
        </div>
    </div>
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
        height: 100%;
        width: 100%;
        background-color: #FE5F55;
    }
    .navigation-item {
        padding: 30px;
    }
    .navigation-item:hover {
        padding: 30px;
        background-color: #885053;
    }



</style>