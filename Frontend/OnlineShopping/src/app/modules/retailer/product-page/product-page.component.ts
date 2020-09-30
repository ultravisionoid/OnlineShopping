import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product:Products;
  constructor() { }

  ngOnInit(): void {
    this.product=JSON.parse(localStorage.getItem("Product"));
    console.log(this.product);

  }
  c:number;
  Compare(){
    
    this.c=JSON.parse(localStorage.getItem("compareItems"));
    this.c++;
    this.c=this.c%5;
    if(this.c==0){
      localStorage.setItem("product1",JSON.stringify(this.product));  
    }
    else if(this.c==1){
      localStorage.setItem("product2",JSON.stringify(this.product));
    }
    else if(this.c==2){
      localStorage.setItem("product3",JSON.stringify(this.product));
    }
    else{
      localStorage.setItem("product4",JSON.stringify(this.product));
    }
    localStorage.setItem("compareItems",JSON.stringify(this.c));
  }

}
