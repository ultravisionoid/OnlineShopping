import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  constructor() { }
  product1:Products;
  product2:Products;
  product3:Products;
  product4:Products;
  
  ngOnInit(): void {
    this.product1=JSON.parse(localStorage.getItem("product1"));
    this.product2=JSON.parse(localStorage.getItem("product2"));
    this.product3=JSON.parse(localStorage.getItem("product3"));
    this.product4=JSON.parse(localStorage.getItem("product4"));
    
  }

}
