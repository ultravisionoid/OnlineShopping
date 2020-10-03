using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace E_commerce.Repository
{
    public class ProductRepository : IProductRepository<Product>
    {
        public readonly E_CommerceEntities e_commerce;
        public ProductRepository(E_CommerceEntities e_Commercedb)
        {
            e_commerce = e_Commercedb;
        }

        E_CommerceEntities obj = new E_CommerceEntities();
        public IQueryable<Product> GetAll()
        {
            e_commerce.Configuration.ProxyCreationEnabled = false;
            return e_commerce.Products;
        }


        public IEnumerable<Product> Getverifiedproducts()
        {
            e_commerce.Configuration.ProxyCreationEnabled = false;
            var products = obj.Database.SqlQuery<Product>(@"select * from Products P where Is_Verified=1").ToList();
            return products;
            //return e_commerce.Products.ToList();
        }

        public IEnumerable<Product> Getnotverifiedproducts()
        {
            var products = obj.Database.SqlQuery<Product>(@"select * from Products P where Is_Verified=0").ToList();
            return products;
            //return e_commerce.Products.ToList();
        }

        public IEnumerable<Product> Getproductbycategory(Product prod)
        {
            var products = obj.Database.SqlQuery<Product>(@"select * from Products P where Is_Verified=1 and Product_Category={0}", prod.Product_Category).ToList();
            return products;
            //return e_commerce.Products.ToList();
        }


        public IEnumerable<Product> Getproductbyretailer(Product prod)
        {
            var products = obj.Database.SqlQuery<Product>(@"select * from Products P where Retailer_Id={0}", prod.Retailer_Id).ToList();
            return products;
            //return e_commerce.Products.ToList();
        }
        public Product Get(int id)
        {
            e_commerce.Configuration.ProxyCreationEnabled = false;
            return e_commerce.Products.Find(id);
        }

        public void Add(Product prod)
        {
            e_commerce.Products.Add(prod);
            e_commerce.SaveChanges();
        }

        public void Delete(int id)
        {
            //Product pro = e_commerce.Products.Find(id);
            //e_commerce.Products.Remove(pro);
            obj.Database.ExecuteSqlCommand(@"delete from Products where Product_Id={0}", id);

        }
            public void Update(Product prod)
            {
                e_commerce.Entry(prod).State = System.Data.Entity.EntityState.Modified;
                e_commerce.SaveChanges();
            }


        }
    }