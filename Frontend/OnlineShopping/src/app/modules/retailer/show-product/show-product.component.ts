import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Products} from "../../../models/Products";

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(private productService:ProductService ) { }

  Products:Products[];
  ngOnInit(): void {
    this.productService.showProduct().subscribe(data=>{
      this.Products=data;
      console.log(data);
    },(e)=>{
      console.log(e);
    })    
  }

}
