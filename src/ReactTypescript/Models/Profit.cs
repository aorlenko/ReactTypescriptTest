using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactTypescript.Models
{
    public class Profit
    {
        public Profit(int year, decimal value)
        {
            Year = year;
            Value = value;
        }

        public int Year { get; }
        public decimal Value { get; }
    }
}
