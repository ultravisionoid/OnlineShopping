using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPIBackend.Repository;

namespace Backend.Controllers
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
            return Ok(retailer);
        }


        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult GetUser(int id)
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
            //catch (System.Data.Entity.Validation.DbEntityValidationException ex)
            //{
            //    foreach (var validationErrors in ex.EntityValidationErrors)
            //    {
            //        foreach (var validationError in validationErrors.ValidationErrors)
            //        {
            //            Console.WriteLine("Property: {0} throws Error: {1}", validationError.PropertyName,
            //                validationError.ErrorMessage);
            //        }
            //    }

            //}
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
    }
}
