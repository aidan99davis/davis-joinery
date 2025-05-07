<template>
    <div>
        <!-- add management only schedule creation and viewing of other peoples schedule -->
        <scheduler />
        <!-- request time off, specify availability, etc -->
    </div>
</template>

<script>
    import Scheduler from '../components/Scheduler'

    export default {
        name: "Schedule",
        components: {
            Scheduler
        }
    }
</script>

<style scoped>

</style>