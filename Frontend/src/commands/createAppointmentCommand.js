export default class createAppointmentCommand {
    constructor() {
        return {
            name: '',
            location: '',
            startDate: '',
            type: 1,
            endDate: ''
        }
    }    
    
}

createAppointmentCommand.execute = function() {
    axios({
        method: 'post',
        url: 'http://localhost:62376/api/Appointments/Post',
        data: {
            name: this.name,
            location: this.location,
            startDate: this.startDate,
            type: this.type,
            endDate: this.endDate
        }
        });
}