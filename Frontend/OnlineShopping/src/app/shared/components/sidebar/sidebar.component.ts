import { Component, OnInit, Inject  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/User';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  login=false ;
  // name:any;
  // name=localStorage.getItem("userData");
  // name:any;
  name="Aayush"
  refer:User;
  constructor(@Inject(DOCUMENT) private _document: Document,private router:Router) { }
  getName(){
    if(localStorage.getItem("name")===null){

    }
    else{
      this.name=localStorage.getItem("name") ;
    }
    if(localStorage.getItem("login")===null){

    }
    else{
      this.login=JSON.parse(localStorage.getItem("login")) ;
    }
    
  }
  ngOnInit(): void {
    

    this.getName();
  }
  logout(){
    localStorage.setItem("login","true");
    localStorage.setItem('name','');
    localStorage.setItem('UserId','');
    localStorage.setItem('UserData','');
    localStorage.setItem('retailer','');
    localStorage.setItem('retailerData','');
    
    localStorage.setItem("person","");
    this._document.location.href = '/';
  }
  cate(c:string){
    localStorage.setItem("category",c);

    
    this._document.location.href = '/category';
    this.router.navigate(['/category'])
  }

}
