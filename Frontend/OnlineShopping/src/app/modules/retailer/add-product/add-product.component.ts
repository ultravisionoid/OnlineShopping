import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {ProductService} from "../../../services/product.service";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  productform:FormGroup;
  constructor(private pb:FormBuilder,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productform=this.pb.group({
      Retailer_Id:['',Validators.compose([Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]*$")])],
      Product_Name:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      Product_Description:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(100)])],
      Product_Price:['',Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")])],
      Product_Category:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20),
      ])],
      Product_Image:['',Validators.required]
    });
  }
  submit(){
    this.productService.addProduct(this.productform.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(["/showProducts"]);
    },(e)=>{
      console.log(e);
    })
  }



}
