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
    [RoutePrefix("api/product")]
    public class ProductController : ApiController
    {
        IProductRepository<Product> dataRepository;

        public ProductController()
        {
            this.dataRepository = new ProductRepository(new E_CommerceEntities2());
        }


        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Product> GetProducts()
        {
            return dataRepository.GetAll();
        }



       

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult GetProduct(int id)
        {
            Product productObj = null;
            try
            {
                productObj = dataRepository.Get(id);
                if (productObj == null)
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
            return Ok(productObj);
        }



        [HttpPost]
        [Route("")]
        public IHttpActionResult CreateProduct([FromBody] Product productObj)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                dataRepository.Add(productObj);
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
            return Ok(productObj);
        }


        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult DeleteProduct(int id)
        {
            try
            {
                Product productObj = dataRepository.Get(id);
                if (productObj == null)
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
        public IHttpActionResult UpdateProduct(int id, [FromBody] Product productObj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (productObj == null)
            {
                return BadRequest("Product is null");
            }
            if (id != productObj.Product_Id)
            {
                return BadRequest();
            }

            //User user = dataRepository.Get(id);
            //if (user == null)
            //{
            //    return NotFound();
            //}

            dataRepository.Update(productObj);

            return Ok(productObj);
        }
    }
}
