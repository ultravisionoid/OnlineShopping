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

}
