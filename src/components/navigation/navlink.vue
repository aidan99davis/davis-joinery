<template>
    <div>
        <router-link :to="to">{{label}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "navlink",
        props: ['label', 'to']
    }
</script>

<style scoped>
    a:link, a:visited {
        color: white;
        width: 100%;
        height: 100%;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }
</style>