import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import{Products} from '../../../models/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  listofproducts:Products[];
  constructor(private product_service:ProductService ,private router : Router) { }

  ngOnInit(): void {
    this.product_service.getVerifiedProducts("Verified").subscribe(data=>{
      this.listofproducts = data;
      console.log(this.listofproducts);
    });
  }

}
