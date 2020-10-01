import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Order} from '../../models/Order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  baseUrl:string="http://localhost:44339/api/orders";
  constructor(private http:HttpClient) { }

  getOrders(id){
    return this.http.post<Order[]>(this.baseUrl+"/"+"Getorders"+"/",JSON.stringify(id),this.httpOptions);
  }

  addOrders(order)
  {
    return this.http.post<Order[]>(this.baseUrl+"/"+"AddtoOrders",JSON.stringify(order),this.httpOptions);
  }
  updateOrders(id,orders){
      return this.http.put<Order>(this.baseUrl+"\\"+id,JSON.stringify(orders),this.httpOptions);
  }

  deleteOrders(id)
  {
    return this.http.delete<Order>(this.baseUrl+"\\"+id,this.httpOptions);

  }
}
