import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from 'src/app/models/Products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css']
})
export class RetailerProfileComponent implements OnInit {

  constructor(private product:ProductService,private formBuilder: FormBuilder) { }
  id:number;
  products:Products[];
  retailerId:FormGroup;
  ngOnInit(): void {
    console.log(  localStorage.getItem("retailerData"));
    this.id=JSON.parse(localStorage.getItem("retailerData"));
    this.retailerId=this.formBuilder.group({
      Retailer_Id:[this.id, [Validators.required]]
    });
    console.log(this.retailerId.value);
    this.product.getbyRetailer(this.retailerId.value).subscribe(data=>{
      this.products=data;
      console.log(data);
    })
    // this.product.getbyRetailer()
  }
  delete(id){
    this.product.deleteProduct(id).subscribe(data=>{
      console.log(data)
    },(e)=>{
      console.log(e);
    })
  }
}
