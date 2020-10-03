using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_commerce.Repository
{
    interface IUserRepository<TEntity>
    {
        IQueryable<TEntity> GetAll();
        TEntity Get(int id);
        void Add(TEntity entity);
        void Update(TEntity dbEntity);
        void Delete(int entity);
        User VerifyLogin(string Email, string Password);
    }
}
