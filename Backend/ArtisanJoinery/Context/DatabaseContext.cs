using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using ArtisanJoinery.Models;

namespace ArtisanJoinery.Context
{
    public class DatabaseContext : DbContext
    {

        private static readonly object padlock = new object();
        private static DatabaseContext instance = null;
        public static DatabaseContext Instance
        {
            get
            {
                lock (padlock)
                {
                    if (instance == null)
                    {
                        instance = new DatabaseContext();
                    }
                    return instance;
                }
            }
        }

        public DatabaseContext() : base("DefaultConnection")
        {
            new Populator().Seed(this);
        }

        public DbSet<Appointment> Appointments { get; set; }

        public void test()
        {
        }

        public void CreateAppointment(string name, string location, DateTime startDate, DateTime endDate, Appointment.AppointmentType type)
        {
            var Appointment = new Appointment(name, location, startDate,endDate,type);
            Appointments.Add(Appointment);
            SaveChanges();
        }
    }
}