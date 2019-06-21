<template>
    <div>
        <full-calendar
                :events="appointments"
                locale="en"
                @eventClick="(event) => openEvent(event)"
                @dayClick="(day, event) => scheduleEvent(day, event)"/>
        <b-button variant="alert">test</b-button>
    </div>
</template>

<script>
    export default {
        name: "Scheduler",
        methods: {
            scheduleEvent: function (day, event) {
                console.log("test")
            },
            openEvent(event)
            {

            }
        },
        data() {
            return {
                appointments: [
                    {
                        title     :  'event1',
                        start     : '2019-07-01',
                        cssClass  : 'family',
                        YOUR_DATA: {}
                    },
                    {
                        title     : 'event2',
                        start     : '2019-07-02',
                        end       : '2019-07-03',
                        cssClass  : ['family', 'career'],
                        YOUR_DATA : {}
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>