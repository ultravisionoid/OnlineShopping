using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPIBackend.Models;
using WebAPIBackend.Repository;

namespace WebAPIBackend.Controllers
{

    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        IUserRepository<User> userrepository;

        public UserController()
        {
            this.userrepository = new UserRepository(new E_CommerceEntities2());
        }
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<User> GetUsers()
        {
            return userrepository.GetAll();
        }
        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult Get(int id)
        {
            User user = null;
            try
            {
                user = userrepository.Get(id);
                if (user == null)
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(user);
        }
        [HttpPost]
        [Route("")]
        public IHttpActionResult CreateUser([FromBody] User userObj)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                userrepository.Add(userObj);

            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(userObj);
        }
        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult DeleteUser(int id)
        {
            try
            {
                User user = userrepository.Get(id);
                if (user == null)
                {
                    return NotFound();
                }
                userrepository.Delete(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok("Record is deleted ..!");
        }

        [HttpPut]
        [Route("{id}")]
        public IHttpActionResult UpdateUser(int id, [FromBody] User userObj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (userObj == null)
            {
                return BadRequest("User is null");
            }
            if (id != userObj.User_Id)
            {
                return BadRequest();
            }
            userrepository.Update(userObj);

            return Ok(userObj);
        }

        [HttpPost]
        [Route("login")]

        public IHttpActionResult VerifyLogin(User users)
        {
            User user = null;
            try
            {
                user = userrepository.VerifyLogin(users.Email, users.Password);
                if (user == null)
                    return NotFound();
            }
            //catch (System.Data.Entity.Validation.DbEntityValidationException ex)
            //{
            //    foreach (var validationErrors in ex.EntityValidationErrors)
            //    {
            //        foreach (var validationError in validationErrors.ValidationErrors)
            //        {
            //            Console.WriteLine("Property: {0} throws Error: {1}", 
            //                validationError.PropertyName,
            //                validationError.ErrorMessage);
            //        }
            //    }
            //}
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(user);
        }

    }


}
