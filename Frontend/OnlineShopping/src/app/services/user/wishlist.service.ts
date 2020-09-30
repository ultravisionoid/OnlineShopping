import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wishlist } from '../../models/Wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

 baseUrl: string = "http://localhost:44339/api/wishlist";
 wishlist:Wishlist[];

  
   showWishlist(id){
    return this.http.post<Wishlist[]>(this.baseUrl+"/"+"Getwishlist"+"/",JSON.stringify(id),this.httpOptions);
  }
 
deleteItem(id){
  return this.http.delete<Wishlist>(this.baseUrl+"\\"+id,this.httpOptions);

}


  
 
  }