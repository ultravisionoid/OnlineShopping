import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/Products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-approve',
  templateUrl: './admin-approve.component.html',
  styleUrls: ['./admin-approve.component.css']
})
export class AdminApproveComponent implements OnInit {

  id;
  listofproducts:Products[];
 Is_Verified: number=1;
  constructor(private product_service:ProductService ,private router : Router) { 

  }


  ngOnInit(): void {
    this.product_service.getNotVerifiedProducts("NotVerified").subscribe(data=>{
      this.listofproducts = data;
      console.log(this.listofproducts);
    });
  }
  getVerified(i)
  {

    i["Is_Verified"]=1;
    this.product_service.editProduct(i["Product_Id"],i).subscribe(data=>{
      console.log(data)
      window.location.reload();
      alert("User Edited Successfully");
      
    })
  }
  

}
