using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ArtisanJoinery.Models
{
    public abstract class DomainObject
    {


        [Key] public int Id { get; set; }
    }
}