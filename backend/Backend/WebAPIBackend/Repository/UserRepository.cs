

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebAPIBackend.Models;


namespace WebAPIBackend.Repository
{
    public class UserRepository : IUserRepository<User>
    {
        public readonly E_CommerceEntities2 e_commerce;
        public UserRepository(E_CommerceEntities2 e_commercedb)
        {
            e_commerce = e_commercedb;

        }


        public void Add(User user)
        {
            e_commerce.Users.Add(user);
            e_commerce.SaveChanges();
        }

        public void Delete(int userId)
        {
            User user = e_commerce.Users.Find(userId);
            e_commerce.Users.Remove(user);
            e_commerce.SaveChanges();


        }

        public User Get(int id)
        {
            return e_commerce.Users.Find(id);
        }



        public IEnumerable<User> GetAll()
        {
            return e_commerce.Users.ToList();
        }

        public void Update(User user)
        {
            e_commerce.Entry(user).State = EntityState.Modified;
            e_commerce.SaveChanges();
        }


        public User VerifyLogin(string email, string password)
        {
            User user = null;
            try
            {
                var userFound = e_commerce.Users
                                     .Where(u => u.Email == email && u.Password == password)
                                     .SingleOrDefault();

                if (userFound != null)
                {
                    user = userFound;
                }
                else
                {
                    user = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return user;
        }

    }

}
