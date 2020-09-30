import { Component, OnInit } from '@angular/core';
import {Products} from "../../../models/Products";
import { Router } from '@angular/router';
import {ProductService} from "../../../services/product.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private productService:ProductService ,private router:Router,private formBuilder: FormBuilder) { }
  Products:Products[];
  category:string;
  retailerId:FormGroup;
  ngOnInit(): void {
    this.category=localStorage.getItem("category");
    this.retailerId=this.formBuilder.group({
      Product_Category:[this.category, [Validators.required]]
    });
    console.log(this.retailerId.value);
    this.productService.getByCategory(this.retailerId.value).subscribe(data=>{
      this.Products=data;
      console.log(data);
    },(e)=>{
      console.log(e);
    })
  }

  viewProduct(Pro:Products){
    localStorage.setItem("Product",JSON.stringify(Pro));
    this.router.navigate(["/Product"]);
  }
  sortName(){
    
    this.Products=this.Products.sort((a,b)=>a["Product_Name"]>b["Product_Name"]?1:-1);

  }
  sortPrice(){
    this.Products=this.Products.sort((a,b)=>a["Product_Price"]>b["Product_Price"]?1:-1);

  }

}
