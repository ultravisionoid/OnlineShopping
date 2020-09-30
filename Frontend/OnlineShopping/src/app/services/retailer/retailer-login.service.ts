import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetailerLoginService {

  constructor(private http:HttpClient) { }

  auth(data){
    return this.http.post("http://localhost:44339/api/retailer/login",data);
  }
  getById(id){
    return this.http.get("http://localhost:44339/api/retailer/"+id);
  }
  addUser(data){
    return this.http.post<any>("http://localhost:44339/api/retailer/",data);
  }

}
