import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { Products } from 'src/app/models/Products';
import {CartService} from '../../../services/user/cart.service';

import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userId:FormGroup
  ord:FormGroup
  editId:FormGroup
  constructor(@Inject(DOCUMENT) private _document: Document,private fb:FormBuilder,private order_service:CartService ,private router : Router) { }
id;
idd:any;
listoforders:Order[];
orderid:number;
Order_Id;
ID:number;
  ngOnInit(): void {
    this.idd=JSON.parse(localStorage.getItem("UserData"));
    console.log(this.idd);
    this.ID=JSON.parse(this.idd["User_Id"]);
    console.log(this.ID);
    
    this.userId=this.fb.group({
      User_Id:[this.ID, [Validators.required]],
      Product_Id:[],
      Product_Quantity:[1, [Validators.required]],
      Total_Price:[],
      Retailer_Id:[],
      Order_Status:[],
      Product_Price:[]

    });

    

    this.order_service.getOrders(this.userId.value).subscribe(data=>{
      this.listoforders=data;
      console.log(this.listoforders);
    });
  }

  quantity:number=1;
    minus(pro)
    {
      if(pro.Product_Quantity>1)
      {
        pro.Product_Quantity--;
        console.log(pro.Product_Quantity);
        pro.Total_Price=pro.Product_Quantity*pro.Product_Price;
        this.order_service.updateOrders(pro.Order_Id,pro).subscribe(data=>{
          console.log(data);});
        
      }
      
    }
    plus(pro)
    {
      pro.Product_Quantity++;
      pro.Total_Price=pro.Product_Quantity*pro.Product_Price;
      this.order_service.updateOrders(pro.Order_Id,pro).subscribe(data=>{
        console.log(data);});

    }

    addtoorders(pro)
    {
      this.order_service.addOrders(this.userId.value).subscribe(data=>{
        this.listoforders=data;
        console.log(this.listoforders);});
    }

    deleteorder(id)
      {
        console.log(id);
        
        this.order_service.deleteOrders(id).subscribe(data=>{
          
         console.log(data);
         this._document.location.href = '/cart';
        });
         
      }

      // editorder(pro)
      // {
      //   pro.Product_Quantity=this.quantity;
      //   pro.Total_Price=pro.Product_Quantity*pro.Product_Price;
      //   this.order_service.updateOrders(pro.Order_Id,pro).subscribe(data=>{
      //     console.log(data);});
      // }



      viewProduct(Pro:Products){
        localStorage.setItem("Product",JSON.stringify(Pro));
        this.router.navigate(["/Product"]);
      }

}
