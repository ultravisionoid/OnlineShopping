import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login:boolean=false;
  constructor(private router:Router) { }
  @Output() toggler:EventEmitter<any>=new EventEmitter();
  toggleSideBar(){
   this.toggler.emit();  
  }

  getName(){
    
    if(localStorage.getItem("login")===null){

    }
    else{
      this.login=JSON.parse(localStorage.getItem("login")) ;
    }
    
  }
  person:string;
  ngOnInit() {
    this.getName();
    this.person=localStorage.getItem("person");
  }
  Profile(){
    if(this.person=="user"){
      this.router.navigate(["/userProfile"]);
    }
    else if(this.person=="retailer"){
      this.router.navigate(["/retailerProfile"]);
      
    }
    else if(this.person=="admin"){
      this.router.navigate(["/homepage"]);
    }
    console.log(this.person);
  }
  Cart(){
    if(this.person=="user"){
      this.router.navigate(["/cart"]);
    }
    
  }
  Wishlist(){
    if(this.person=="user"){
      this.router.navigate(["/wishlist"]);
    }
  }
  Compare(){
    if(this.person=="user"){
      this.router.navigate(["/compare"]);
    }
  }
}
