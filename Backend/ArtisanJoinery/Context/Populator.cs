using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using ArtisanJoinery.Models;

namespace ArtisanJoinery.Context
{
    public class Populator : DropCreateDatabaseIfModelChanges<DatabaseContext>
    {
        public void Seed(DatabaseContext context)
        {
            base.Seed(context);

            Appointment app1 = new Appointment
            {
                description = "Test 1",
                location = "test address",
                name = "test name",
                type = Appointment.AppointmentType.Consultation,
                whenStart = DateTime.Today,
                whenEnd = DateTime.Today.AddDays(1)

            };
            Appointment app2 = new Appointment
            {
                description = "Test 2",
                location = "test address",
                name = "test name",
                type = Appointment.AppointmentType.Consultation,
                whenStart = DateTime.Today,
                whenEnd = DateTime.Today.AddDays(2)

            };
            Appointment app3 = new Appointment
            {
                description = "Test 3",
                location = "test address",
                name = "test name",
                type = Appointment.AppointmentType.Consultation,
                whenStart = DateTime.Today,
                whenEnd = DateTime.Today.AddDays(6)

            };

            context.Appointments.Add(app1);
            context.Appointments.Add(app2);
            context.Appointments.Add(app3);
            
            context.SaveChanges();
        }
    }
}