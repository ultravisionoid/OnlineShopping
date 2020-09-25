using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebAPIBackend.Models;

namespace WebAPIBackend.Repository
{
    public class ProductRepository : IProductRepository<Product>
    {
        public readonly E_CommerceEntities2 e_commerce;
        public ProductRepository(E_CommerceEntities2 e_Commercedb)
        {
            e_commerce = e_Commercedb;
        }
        public void Add(Product prod)
        {
            e_commerce.Products.Add(prod);
            e_commerce.SaveChanges();
        }

        public void Delete(int id)
        {
            Product pro = e_commerce.Products.Find(id);
            e_commerce.Products.Remove(pro);
        }

        public Product Get(int id)
        {
            return e_commerce.Products.Find(id);
        }

        public IEnumerable<Product> GetAll()
        {
            return e_commerce.Products.ToList();
        }

        public void Update(Product prod)
        {
            e_commerce.Entry(prod).State = System.Data.Entity.EntityState.Modified;
            e_commerce.SaveChanges();
        }
    }
}