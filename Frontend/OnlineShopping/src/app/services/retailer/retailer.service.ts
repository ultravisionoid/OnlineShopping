import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Retailer} from '../../models/Retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:61872/api/retailer";

  getAllRetailers(resource:string){
    return this.http.get<Retailer[]>(this.baseUrl+"\\"+resource,this.httpOptions);
  }

  deleteRetailer(id){
    return this.http.delete<Retailer>(this.baseUrl+"\\"+id,this.httpOptions);

  }

}
