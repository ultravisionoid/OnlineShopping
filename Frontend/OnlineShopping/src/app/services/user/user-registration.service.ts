import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../../models/User'
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private _http:HttpClient) {
    
   }

   addUser(User){
     return this._http.post<any>("http://localhost:44339/api/users/",User);
   }
}
