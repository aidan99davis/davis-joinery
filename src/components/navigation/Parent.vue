<template>
    <div>
        <div class="header"></div>
        <router-view />
        <div class="footer"></div>
    </div>
</template>

<script>
    export default {
        name: "Parent"
    }
</script>

<style scoped>
.header {
    padding: 5%;
}

.footer {
    padding: 5%;
}

img {
    max-height: 10em;
}
</style>