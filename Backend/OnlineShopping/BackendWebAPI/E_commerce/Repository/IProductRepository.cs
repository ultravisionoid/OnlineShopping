using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_commerce.Repository
{
    interface IProductRepository<TEntity>
    {
        IQueryable<TEntity> GetAll();
        TEntity Get(int id);
        void Add(TEntity entity);
        void Update(TEntity dbEntity);
        void Delete(int entity);
        IEnumerable<Product> Getverifiedproducts();
        IEnumerable<Product> Getnotverifiedproducts();
        IEnumerable<Product> Getproductbycategory(Product productObj);
        IEnumerable<Product> Getproductbyretailer(Product productObj);
    }
}
