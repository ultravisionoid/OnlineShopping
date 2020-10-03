using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace E_commerce.Repository
{
    public class UserRepository : IUserRepository<User>
    {
        public readonly E_CommerceEntities e_commerce;
        public UserRepository(E_CommerceEntities e_commercedb)
        {
            e_commerce = e_commercedb;

        }


        public void Add(User userObj)
        {
            e_commerce.Users.Add(userObj);
            e_commerce.SaveChanges();
        }

        public void Delete(int userId)
        {
            User userObj = e_commerce.Users.Find(userId);
            e_commerce.Users.Remove(userObj);
            e_commerce.SaveChanges();


        }

        public User Get(int id)
        {
            return e_commerce.Users.Find(id);
        }



        public IQueryable<User> GetAll()
        {
            e_commerce.Configuration.ProxyCreationEnabled = false;
            return e_commerce.Users;
        }

        public void Update(User userObj)
        {
            e_commerce.Entry(userObj).State = EntityState.Modified;
            e_commerce.SaveChanges();
        }


        public User VerifyLogin(string email, string password)
        {
            User userObj = null;
            try
            {
                var userFound = e_commerce.Users
                                     .Where(u => u.Email == email && u.Password == password)
                                     .SingleOrDefault();

                if (userFound != null)
                {
                    userObj = userFound;
                }
                else
                {
                    userObj = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return userObj;
        }

    }
}