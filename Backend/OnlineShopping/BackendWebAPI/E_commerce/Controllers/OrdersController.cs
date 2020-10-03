using E_commerce.Models;
using E_commerce.Repository;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace E_commerce.Controllers
{
    [RoutePrefix("api/orders")]
    public class OrdersController : ApiController
    {
        IOrdersRepository<Order> ordersrepository;

        public OrdersController()
        {
            this.ordersrepository = new OrdersRepository(new E_CommerceEntities());
        }
        E_CommerceEntities obj = new E_CommerceEntities();

        [HttpPost]
        [Route("Getorders")]
        public IEnumerable<Join> GetOrders([FromBody] Order orderobj)
        {
            return ordersrepository.getorders(orderobj);
        }

        [HttpPost]
        [Route("Myorders")]
        public IEnumerable<Product> MyOrders([FromBody] Order orderobj)
        {
            return ordersrepository.myorders(orderobj);
            
        }

        [HttpPost]
        [Route("AddtoOrders")]
        public IHttpActionResult CreateOrders([FromBody] Order ordersObj)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                ordersrepository.Add(ordersObj);

            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(ordersObj);
        }


        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult DeleteOrder(int id)
        {
            try
            {
                Order ordersObj = ordersrepository.Get(id);
                if (ordersObj == null)
                {
                    return NotFound();
                }
                ordersrepository.Delete(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok("Record is deleted ..!");
        }


        [HttpPut]
        [Route("{id}")]
        public IHttpActionResult UpdateOrder(int id, [FromBody] Order ordersObj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (ordersObj == null)
            {
                return BadRequest("Orders are null");
            }
            if (id != ordersObj.Order_Id)
            {
                return BadRequest();
            }

            ordersrepository.Update(ordersObj);

            return Ok(ordersObj);
        }
    }
}
