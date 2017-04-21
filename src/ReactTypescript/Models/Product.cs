namespace ReactTypescript.Models
{
    public class Product
    {
        public Product(string name, decimal price, bool inStock)
        {
            ProductName = name;
            ProductPrice = price;
            InStock = inStock;
        }

        public string ProductName { get; }
        public decimal ProductPrice { get; }
        public bool InStock { get; }
    }
}
