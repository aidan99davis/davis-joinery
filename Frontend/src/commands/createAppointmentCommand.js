import ClientManager from '../client/ClientManager'
class createAppointmentCommand {
    constructor() {
        this.name = '',
        this.location =  '',
        this.startDate = '',
        this.type = 1,
        this.endDate = ''
    }    

    execute() {
    
        return ClientManager.post('/Appointments/', {
            name: this.name,
            location: this.location,
            startDate: this.startDate,
            type: this.type,
            endDate: this.endDate
        })
    }
    
    
}

export default createAppointmentCommand;