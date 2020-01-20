using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ArtisanJoinery.Models
{
    public class Appointment : DomainObject
    {
        public enum AppointmentType
        {
            Consultation = 1,
            Estimate = 2,
            Job = 4,
            Meeting = 8
        }

        public string name { get; set; }
        public string location { get; set; }
        public string description { get; set; }
        public DateTime whenStart { get; set; }
        public DateTime whenEnd { get; set; }
        public AppointmentType type { get; set; }
    }

    
}