﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Routing;
using ArtisanJoinery.Commands;
using ArtisanJoinery.Context;

namespace ArtisanJoinery.Controllers
{
    [RoutePrefix("Appointments")]
    public class AppointmentsController : ApiController
    {
        private DatabaseContext dbContext = new DatabaseContext();

        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            { //Prepare data to be returned using Linq as follows  
                var result = from appointment in dbContext.Appointments
                    select new
                    {
                        appointment.Id,
                        appointment.name,
                        appointment.location,
                        appointment.description,
                        appointment.type,
                        appointment.whenStart,
                        appointment.whenEnd
                    };
                return Ok(result);
            }
            catch (Exception)
            {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }

        [HttpPost]
        public IHttpActionResult Post(CreateEventCommand command)
        {
            command.Execute();
            return Ok();
        }
    }
}
