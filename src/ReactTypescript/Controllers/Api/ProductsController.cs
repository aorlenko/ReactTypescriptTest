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
        public IEnumerable<Product> GetProducts(ProductsRequest request)
        {
            var products = new List<Product>()
            {
                new Product("iPhone6", 200, true),
                new Product("iPhone7", 500, true),
                new Product("Huawei", 150, true),
                new Product("Samsung Galaxy S6", 400, true),
                new Product("Motorola Razr", 255, true),
            };

            return products
                .Skip(request.PageNumber * request.PageSize)
                .Take(request.PageSize);
        }
    }
}
