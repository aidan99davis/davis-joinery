using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ArtisanJoinery.Context;
using ArtisanJoinery.Models;

namespace ArtisanJoinery.Commands
{
    [Serializable]
    public class CreateEventCommand : ICommand
    {
        public string Name { get; set; }
        public string Location { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Appointment.AppointmentType Type { get; set; }

        public void Execute()
        {

            DatabaseContext.Instance.CreateAppointment(Name, Location, StartDate, EndDate, Type);
        }
    }
}