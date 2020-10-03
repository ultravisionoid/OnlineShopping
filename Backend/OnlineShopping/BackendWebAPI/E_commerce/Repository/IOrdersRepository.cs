using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_commerce.Repository
{
    interface IOrdersRepository<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(int id);
        void Add(TEntity entity);
        void Update(TEntity dbEntity);
        void Delete(int entity);
        IEnumerable<Join> getorders(Order orderobj);
        IEnumerable<Product> myorders(Order orderobj);
    }
}
