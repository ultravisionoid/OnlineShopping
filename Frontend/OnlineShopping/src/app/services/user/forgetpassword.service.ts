import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor(private http:HttpClient) { }

  baseUrl: string = "http://localhost:44339/api/users/";
  

  sendmsgVerification(data){
    return this.http.post(this.baseUrl+"ForgotPassword",data);
  }
  confirmPasswordUpdation(data){
    return this.http.post(this.baseUrl+"updatePassword",data);
  }
  // sendEmailVerification(data){
  //   return this.http.post(this.baseUrl+"sendMail",data);
  // }
  // confirmpasswordupdation(data){
  //   return this.http.post(this.baseUrl+"resetpassword",data);
  // }



}
