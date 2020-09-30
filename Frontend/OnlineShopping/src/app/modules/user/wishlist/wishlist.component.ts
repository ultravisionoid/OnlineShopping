import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Wishlist} from 'src/app/models/Wishlist';
import {WishlistService} from 'src/app/services/user/wishlist.service'
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist:Wishlist[];
  
  userId:FormGroup;

  constructor(private fb:FormBuilder, private wlService:WishlistService ,private router:Router) { }
  ngOnInit(): void {
    this.userId=this.fb.group({
      User_Id:[1, [Validators.required]]
      });
    this.wlService.showWishlist(this.userId.value).subscribe(data=>{
      this.wishlist=data;
      console.log(this.wishlist);
    });
}
   
    
    deleteItem(id){
      this.wlService.deleteItem(id).subscribe(data=>{
    console.log("deleted");
    this.ngOnInit();
   
    });
     }
   
   






}
