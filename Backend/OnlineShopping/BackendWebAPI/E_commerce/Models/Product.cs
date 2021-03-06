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
    
    public partial class Product
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Product()
        {
            this.Orders = new HashSet<Order>();
            this.WishLists = new HashSet<WishList>();
        }
    
        public int Product_Id { get; set; }
        public string Product_Name { get; set; }
        public string Product_Description { get; set; }
        public decimal Product_Price { get; set; }
        public string Product_Category { get; set; }
        public int Retailer_Id { get; set; }
        public int Is_Verified { get; set; }
        public string Product_Image { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Order> Orders { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<WishList> WishLists { get; set; }
        public virtual Retailer Retailer { get; set; }
    }
}
