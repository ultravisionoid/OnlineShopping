import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  Users:any;
  constructor(private http:HttpClient) { }
  auth(data){
    console.log(data);
    return this.http.post("http://localhost:44339/api/users/login",data);
  }
  getByid(id){
    return this.http.get("http://localhost:44339/api/users/"+id);
  }


}
