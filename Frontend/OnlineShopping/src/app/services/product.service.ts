import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Products} from "../models/Products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(Product){
    return this.http.post<any>("http://localhost:44339/api/products/",Product);
  }
  showProduct(){
    return this.http.get<Products[]>("http://localhost:44339/api/products/getall");
  }
}
