using E_commerce.Models;
using E_commerce.Repository;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace E_commerce.Controllers
{
    [RoutePrefix("api/retailer")]
    public class RetailerController : ApiController
    {
        IRetailerRepository<Retailer> dataRepository;

        public RetailerController()
        {
            this.dataRepository = new RetailerRepository(new E_CommerceEntities());
        }


        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Retailer> GetRetailers()

        {
            return dataRepository.GetAll();
        }

        [HttpPost]
        [Route("login")]
        public IHttpActionResult VerifyLogin(Retailer retailerObj)
        {
            Retailer retailer = null;
            try
            {
                retailer = dataRepository.VerifyLogin(retailerObj.Email, retailerObj.Password);
                if (retailer == null)
                    return NotFound();
            }
           
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(retailer.Retailer_Id);
        }


        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult GetRetailer(int id)
        {
            Retailer retailerObj = null;
            try
            {
                retailerObj = dataRepository.Get(id);
                if (retailerObj == null)
                {
                    return NotFound();
                }
            }
           
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(retailerObj);
        }



        [HttpPost]
        [Route("")]
        public IHttpActionResult CreateRetailer([FromBody] Retailer retailerObj)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                dataRepository.Add(retailerObj);
            }
            
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(retailerObj);
        }


        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult DeleteRetailer(int id)
        {
            try
            {
                Retailer retailerObj = dataRepository.Get(id);
                if (retailerObj == null)
                {
                    return NotFound();
                }
                dataRepository.Delete(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok("Record is deleted ..!");
        }


        [HttpPut]
        [Route("{id}")]
        public IHttpActionResult UpdateRetailer(int id, [FromBody] Retailer retailerObj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (retailerObj == null)
            {
                return BadRequest("Retailer is null");
            }
            if (id != retailerObj.Retailer_Id)
            {
                return BadRequest();
            }

            //User user = dataRepository.Get(id);
            //if (user == null)
            //{
            //    return NotFound();
            //}

            dataRepository.Update(retailerObj);

            return Ok(retailerObj);
        }


        [HttpPost]
        [AllowAnonymous]
        [Route("ForgotPassword")]
        public string postSendMsg([FromBody] Retailer retailerObj)
        {
            Random rnd = new Random();
            int otp = rnd.Next(1000, 9999);
            string number = retailerObj.Mobile_Number;
            string msg = "Your Otp is : " + otp.ToString();
            string result;
            string msg1 = System.Web.HttpUtility.UrlEncode(msg);
            using (var wb = new WebClient())
            {
                byte[] response = wb.UploadValues("https://api.textlocal.in/send/", new NameValueCollection()
                {
                    {"apikey" , "XoZjtJG2b2o-W8SaxFuMQAKfbDqvS08Q5htE6inxcP" },
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
    }
}
