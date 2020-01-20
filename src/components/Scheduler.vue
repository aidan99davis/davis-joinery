<template>
    <div class="schedulerBody">
        <div>
            <full-calendar
                    :events="events"
                    locale="en"
                    @eventClick="(event) => openEvent(event)"
                    @dayClick="(day, event) => scheduleEvent(day, event)"/>
        </div>
        <br>
        <b-button id="newCalenderRecord" pill v-b-modal.modal-1>+</b-button>

        <b-modal id="modal-1" title="New Record">
            <b-form>
                <label>Name of appointment</label>
                <b-input
                        id="name"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Consultation"
                        v-model="createCommand.name"
                ></b-input>
                <br>

                <label>Location(Address)</label>
                <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-form-textarea
                            id="textarea"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                            v-model="createCommand.address"/>
                </b-input-group>
                <br>
                <b-jumbotron>
                    <label>Start Date</label>
                    <b-form-input type="date" class="mb-2 mr-sm-2 mb-sm-0" v-model="createCommand.startDate" />

                    <label>End Date</label>
                    <b-form-input type="date" class="mb-2 mr-sm-2 mb-sm-0" v-model="createCommand.endDate"/>

                </b-jumbotron>

                <b-button variant="primary" @click="createRecord">Save</b-button>
            </b-form>
        </b-modal>
    </div>
</template>

<script>

  import axios from "axios";
    export default {
        name: "Scheduler",
        computed: {
            events: function() {
                return this.appointments
            }
        },
        beforeMount() {
            this.getAppointments()
        },
        methods: {
            getAppointments() {
                axios({ method: "GET", "url": "http://localhost:62376/api/Appointments" }).then(result => {
                    var appointmentDtos = result.data.results;
                    console.log(result.data)
                    result.data.forEach(element => {
                        var appointment = {
                        title     : element.name,
                        start     : element.whenStart,
                        end       : element.whenEnd,
                        cssClass  : ['family', 'career'],
                        YOUR_DATA : {}
                        }
                        this.appointments.push(appointment)
                    });
                }, error => {
                    console.error(error);
                });
            },
            clearCommand() {
                this.createCommand = {
                    name: '',
                    address: '',
                    startDate: '',
                    type: 1,
                    endDate: ''
                }
            },
            createAppointment() {
                var i = this.appointments.length
                this.appointments[i] = {
                    title: this.createCommand.name,
                    start: this.createCommand.startDate,
                    end: this.createCommand.endDate,
                    YOUR_DATA: {
                        address: this.createCommand.address
                    }
                }
            },
            openEvent(event)
            {
                console.log(event)
            },
            createRecord()
            {
                this.creatingEvent = true
                console.log(this.appointments)

                createAppointment();
                console.log(this.appointments)
                clearCommand();
                this.creatingEvent = false
            }
        },
        data() {
            return {
                createCommand: {
                    name: '',
                    address: '',
                    startDate: '',
                    cssClass  : 'family',
                    endDate: ''
                },
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
                ],
                creatingEvent: false
            }
        }
    }
</script>

<style scoped>

    .schedulerBody {
        height: 75% !important;

    }

</style>