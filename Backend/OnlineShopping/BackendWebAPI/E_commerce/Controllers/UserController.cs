using E_commerce.Models;
using E_commerce.Repository;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace E_commerce.Controllers
{
    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        IUserRepository<User> userrepository;

        public UserController()
        {
            this.userrepository = new UserRepository(new E_CommerceEntities());
        }
        [HttpGet]
        [Route("GetAll")]
        public IQueryable<User> GetUsers()
        {
            return userrepository.GetAll();
        }
        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult Get(int id)
        {
            User userObj = null;
            try
            {
                userObj = userrepository.Get(id);
                if (userObj == null)
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(userObj);
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
                User userObj = userrepository.Get(id);
                if (userObj == null)
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

        public IHttpActionResult VerifyLogin(User userObj)
        {
            User userObj1 = null;
            try
            {
                userObj1 = userrepository.VerifyLogin(userObj.Email, userObj.Password);
                if (userObj1 == null)
                    return NotFound();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(userObj1);
        }



        [HttpPost]
        [AllowAnonymous]
        [Route("ForgotPassword")]
        public string postSendMsg([FromBody] User userObj)
        {
            Random rnd = new Random();
            int otp = rnd.Next(1000, 9999);
            string number = userObj.Mobile_Number;
            string msg = "Your Otp is : " + otp.ToString();
            string result;
            string msg1 = System.Web.HttpUtility.UrlEncode(msg);
            using (var wb = new WebClient())
            {
                byte[] response = wb.UploadValues("https://api.textlocal.in/send/", new NameValueCollection()
                {
                    {"apikey" , "rnvj1TRurXw-fOHSh0q9eFi9Ekmfzn9x8SFFep4AqI" },
                    {"numbers", number},
                    {"message", msg1 },
                    {"sender", "TXTLCL" }

                });
                result = System.Text.Encoding.UTF8.GetString(response);
            }
            try
            {

                return otp.ToString();
            }
            catch (Exception ex)
            {
                return "error:" + ex.ToString();
            }
        }

        E_CommerceEntities e_commerce = new E_CommerceEntities();
        [HttpPost]

        [Route("updatePassword")]
        public string resetPassword([FromBody] User userDetails)
        {
            try
            {
                e_commerce.Database.ExecuteSqlCommand(@"update users set Password = @password where Mobile_Number = @MobileNumber", new SqlParameter("@password", userDetails.Password), new SqlParameter("@MobileNumber", userDetails.Mobile_Number));
                return "Password Changed Successfully";
            }
            catch (Exception ex)
            {
                return "error:" + ex.ToString();
            }




        }

    }

}
