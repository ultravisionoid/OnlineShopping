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
    [RoutePrefix("api/wishlist")]
    public class WishListController : ApiController
    {
        IWishListRepository<WishList> wishlistrepository;


        public WishListController()
        {
            this.wishlistrepository = new WishListRepository(new E_CommerceEntities());
        }

        E_CommerceEntities obj = new E_CommerceEntities();

        [HttpPost]
        [Route("Getwishlist")]
        public IEnumerable<join1> GetWishList([FromBody] WishList wishlistobj)
        {
            return wishlistrepository.Getwishlist(wishlistobj);
        }


        [HttpPost]
        [Route("AddtoWishList")]
        public IHttpActionResult CreateWishList([FromBody] WishList wishlistObj)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                wishlistrepository.Add(wishlistObj);

            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(wishlistObj);
        }



        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult DeleteWishList(int id)
        {
            try
            {
                WishList wishlistObj = wishlistrepository.Get(id);
                if (wishlistObj == null)
                {
                    return NotFound();
                }
                wishlistrepository.Delete(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok("Record is deleted ..!");
        }
    }
}
