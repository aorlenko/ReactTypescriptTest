using Microsoft.AspNetCore.Mvc;
using ReactTypescript.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactTypescript.Controllers.Api
{
    [Route("api/products")]
    public class ProductsController : Controller
    {
        [HttpGet]
        public IEnumerable<Product> GetProducts()
        {
            var rnd = new Random();
            var rndBool = new Random();
            var products = new List<Product>()
            {
                new Product("iPhone6", rnd.Next(1000), rndBool.Next(0,2)==0 ? false : true),
                new Product("iPhone7", rnd.Next(1000), rndBool.Next(0,2)==0 ? false : true),
                new Product("Huawei", rnd.Next(1000), rndBool.Next(0,2)==0 ? false : true),
                new Product("Samsung Galaxy S6", rnd.Next(1000), rndBool.Next(0,2)==0 ? false : true),
                new Product("Motorola Razr", rnd.Next(1000), rndBool.Next(0,2)==0 ? false : true),
            };

            return products;
        }
    }
}
