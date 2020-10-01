import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Products} from "../models/Products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  addProduct(Product){
    return this.http.post<any>("http://localhost:44339/api/products/",Product);
  }
  showProduct(){
    return this.http.get<Products[]>("http://localhost:44339/api/products/getall");
  }
  productbyId(id){
    return this.http.get<Products>("http://localhost:44339/api/products/"+id);
  }
  getbyRetailer(id){
    return this.http.post<Products[]>("http://localhost:44339/api/products/retailer",id);
  }
  deleteProduct(id){
    return this.http.delete<any>("http://localhost:44339/api/products/"+id)
  }
  getByCategory(id){
    return this.http.post<Products[]>("http://localhost:44339/api/products/Category/",id);
  }

  baseUrl:string="http://localhost:44339/api/products";
  getVerifiedProducts(resource:string){
    return this.http.get<Products[]>(this.baseUrl+"\\"+resource,this.httpOptions);
  }
  getNotVerifiedProducts(resource:string){
    return this.http.get<Products[]>(this.baseUrl+"\\"+resource,this.httpOptions);
  }

  editProduct(id,product){
    return this.http.put<Products>(this.baseUrl+"\\"+id,JSON.stringify(product),this.httpOptions);

  }

}
