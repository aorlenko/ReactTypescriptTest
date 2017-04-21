using Microsoft.AspNetCore.Mvc;
using ReactTypescript.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactTypescript.Controllers.Api
{
    [Route("api/profits/")]
    public class ProfitsController : Controller
    {
        public IEnumerable<Profit> GetProfits()
        {
            return new List<Profit>()
            {
                new Profit(2014, 100383.3m),
                new Profit(2015, 345969),
                new Profit(2016, 500000)
            };
        }
    }
}
