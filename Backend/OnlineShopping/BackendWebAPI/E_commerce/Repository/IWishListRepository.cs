using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_commerce.Repository
{
    interface IWishListRepository<TEntity>
    { 
        TEntity Get(int id);
        void Add(TEntity entity);
        void Delete(int entity);
        IEnumerable<join1> Getwishlist(WishList wishlistobj);
    }
}
