using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAPIBackend.Models;

namespace WebAPIBackend.Repository
{
    interface IUserRepository<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(int id);
        void Add(TEntity entity);
        void Update(TEntity dbEntity);
        void Delete(int entity);
        User VerifyLogin(string Email, string Password);
    }
}
