using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace E_commerce.Repository
{
    public class OrdersRepository : IOrdersRepository<Order>
    {
        public readonly E_CommerceEntities e_commerce;
        public OrdersRepository(E_CommerceEntities e_commercedb)
        {
            e_commerce = e_commercedb;
        }
        E_CommerceEntities obj = new E_CommerceEntities();
        public IEnumerable<Join> getorders(Order orderobj)
        {
            var a = obj.Database.SqlQuery<Join>(@"select * from Products P inner join Orders O on P.Product_Id= O.Product_Id where O.User_Id= {0} and O.Order_Status=0", orderobj.User_Id).ToList();
            return a;
        }

        public IEnumerable<Product> myorders(Order orderobj)
        {
            var a = obj.Database.SqlQuery<Product>(@"select * from Products P full outer join Orders O on P.Product_Id= O.Product_Id where O.User_Id= {0} and  O.Order_Status=1", orderobj.User_Id).ToList();
            return a;
        }

        public Order Get(int id)
        {
            return e_commerce.Orders.Find(id);
        }
        public void Add(Order ordersObj)
        {
            e_commerce.Orders.Add(ordersObj);
            e_commerce.SaveChanges();
        }

        public void Delete(int ordersid)
        {
            Order ordersObj = e_commerce.Orders.Find(ordersid);
            e_commerce.Orders.Remove(ordersObj);
            e_commerce.SaveChanges();
        }

        

        public IEnumerable<Order> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Update(Order orderobj)
        {
            e_commerce.Entry(orderobj).State = System.Data.Entity.EntityState.Modified;
            e_commerce.SaveChanges();
        }

        
    }
}