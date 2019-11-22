<template>
    <div>
        <div class="header"><img src="../../assets/images/BespokeKitchen-01.jpg" width="100%" height="20%" alt="Bespoke Kitchen"></div>
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