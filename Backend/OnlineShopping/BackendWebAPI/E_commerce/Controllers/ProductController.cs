using E_commerce.Models;
using E_commerce.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace E_commerce.Controllers
{
    [RoutePrefix("api/products")]
    public class ProductController : ApiController
    {
        IProductRepository<Product> dataRepository;

        public ProductController()
        {
            this.dataRepository = new ProductRepository(new E_CommerceEntities());
        }

        [HttpGet]
        [Route("GetAll")]
        public IQueryable<Product> GetProducts()
        {
            return dataRepository.GetAll();
        }

        [HttpGet]
        [Route("Verified")]
        public IEnumerable<Product> GetVerifiedProducts()
        {
            return dataRepository.Getverifiedproducts();
        }

        [HttpGet]
        [Route("NotVerified")]
        public IEnumerable<Product> GetNotVerifiedProducts()
        {
            return dataRepository.Getnotverifiedproducts();
        }

        [HttpPost]
        [Route("Category")]
        public IEnumerable<Product> GetProductByCategory([FromBody] Product productObj)
        {
            return dataRepository.Getproductbycategory(productObj);
        }

        [HttpPost]
        [Route("retailer")]
        public IEnumerable<Product> GetProductByRetailer([FromBody] Product productObj)
        {
            return dataRepository.Getproductbyretailer(productObj);
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

            dataRepository.Update(productObj);

            return Ok(productObj);
        }
    }
}
