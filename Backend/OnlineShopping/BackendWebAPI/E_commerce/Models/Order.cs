//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace E_commerce.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Order
    {
        public int Order_Id { get; set; }
        public int User_Id { get; set; }
        public int Product_Id { get; set; }
        public int Product_Quantity { get; set; }
        public Nullable<decimal> Total_Price { get; set; }
        public int Retailer_Id { get; set; }
        public int Order_Status { get; set; }
    
        public virtual Product Product { get; set; }
        public virtual Retailer Retailer { get; set; }
        public virtual User User { get; set; }
    }
}