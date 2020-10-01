import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Products} from "../../../models/Products";
import { Router } from '@angular/router';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  term:string;
  constructor(private productService:ProductService ,private router:Router ) { }

  Products:Products[];
  ngOnInit(): void {
    this.productService.showProduct().subscribe(data=>{
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
