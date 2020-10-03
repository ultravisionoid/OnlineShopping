using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace E_commerce.Repository
{
    public class WishListRepository : IWishListRepository<WishList>
    {
        public readonly E_CommerceEntities e_commerce;
        public WishListRepository(E_CommerceEntities e_commercedb)
        {
            e_commerce = e_commercedb;
        }
        E_CommerceEntities obj = new E_CommerceEntities();
        public IEnumerable<join1> Getwishlist(WishList id)
        {
            var a = obj.Database.SqlQuery<join1>(@"select * from Products P inner join WishList W on P.Product_Id= W.Product_Id where W.User_Id=" + id.User_Id).ToList();
            return a;
        }
        public void Add(WishList wishlistobj)
        {
            e_commerce.WishLists.Add(wishlistobj);
            e_commerce.SaveChanges();
        }

        public void Delete(int wishlistid)
        {
            WishList wishlistobj = e_commerce.WishLists.Find(wishlistid);
            e_commerce.WishLists.Remove(wishlistobj);
            e_commerce.SaveChanges();
        }

        public WishList Get(int id)
        {
            return e_commerce.WishLists.Find(id);
        }

        

        

    }
}