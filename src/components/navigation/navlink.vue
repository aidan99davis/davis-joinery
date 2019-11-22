<template>
    <div >
        <router-link class="navlink" :to="to">{{label}}</router-link>
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
    .navlink {
        padding: 30px;
        cursor: pointer;
    }
    .navlink:hover {
        padding: 30px;
        background-color: #885053;
    }
</style>