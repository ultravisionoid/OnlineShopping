using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebAPIBackend.Models;

namespace WebAPIBackend.Repository
{
    public class RetailerRepository : IRetailerRepository<Retailer>
    {
        public readonly E_CommerceEntities2 e_commerce;
        public RetailerRepository(E_CommerceEntities2 e_Commercedb)
        {
            e_commerce = e_Commercedb;
        }

        public void Add(Retailer retailer)
        {
            e_commerce.Retailers.Add(retailer);
            e_commerce.SaveChanges();
        }

        public void Delete(int retId)
        {
            Retailer retailer = e_commerce.Retailers.Find(retId);
            e_commerce.Retailers.Remove(retailer);
            e_commerce.SaveChanges();
        }

        public Retailer Get(int id)
        {
            return e_commerce.Retailers.Find(id);
        }

        public IEnumerable<Retailer> GetAll()
        {
            return e_commerce.Retailers.ToList();
        }

        public void Update(Retailer retailer)
        {
            e_commerce.Entry(retailer).State = System.Data.Entity.EntityState.Modified;
            e_commerce.SaveChanges();
        }
    }
}