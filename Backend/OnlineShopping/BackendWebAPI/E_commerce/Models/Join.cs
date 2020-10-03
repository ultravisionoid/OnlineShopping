using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace E_commerce.Models
{
    public class Join
    {
        public int Order_Id { get; set; }
        public int User_Id { get; set; }
        public int Product_Id { get; set; }
        public int Product_Quantity { get; set; }
        public Nullable<decimal> Total_Price { get; set; }
        public int Retailer_Id { get; set; }
        public int Order_Status { get; set; }
       
        public string Product_Name { get; set; }
        public string Product_Description { get; set; }
        public decimal Product_Price { get; set; }
        public string Product_Category { get; set; }
    
        public int Is_Verified { get; set; }
        public string Product_Image { get; set; }

    }
}