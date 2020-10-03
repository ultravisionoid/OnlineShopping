using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace E_commerce.Repository
{
    public class RetailerRepository : IRetailerRepository<Retailer>
    {
        public readonly E_CommerceEntities e_commerce;
        public RetailerRepository(E_CommerceEntities e_Commercedb)
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
            e_commerce.Configuration.ProxyCreationEnabled = false;
            return e_commerce.Retailers.Find(id);
        }

        public IEnumerable<Retailer> GetAll()
        {
            e_commerce.Configuration.ProxyCreationEnabled = false;
            return e_commerce.Retailers.ToList();
        }

        public void Update(Retailer retailer)
        {
            e_commerce.Entry(retailer).State = System.Data.Entity.EntityState.Modified;
            e_commerce.SaveChanges();
        }



        public Retailer VerifyLogin(string email, string password)
        {
            Retailer retailer = null;
            try
            {
                var retailerFound = e_commerce.Retailers
                                     .Where(u => u.Email == email && u.Password == password)
                                     .SingleOrDefault();

                if (retailerFound != null)
                {
                    retailer = retailerFound;
                }
                else
                {
                    retailer = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            e_commerce.Configuration.ProxyCreationEnabled = false;
            return retailer;
        }
    }
}