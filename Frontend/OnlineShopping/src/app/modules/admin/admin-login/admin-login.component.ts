import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted=false;
  constructor(private formBuilder: FormBuilder,private router : Router,@Inject(DOCUMENT) private _document: Document) { 
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: [null, [Validators.required]],
      Password: [null, Validators.required]
    });
  }

submit(){
  console.log(this.loginForm.value)
  if((this.loginForm.value["Email"]=="sai@gmail.com"||this.loginForm.value["Email"]=="aayush@gmail.com") && (this.loginForm.value["Password"]=="sai"||this.loginForm.value["Password"]=="aaaaaaaa"))
  {
    localStorage.setItem("person","admin");
    localStorage.setItem("name","Admin");
    localStorage.setItem("login","false");

    this._document.location.href = '/';
    this.router.navigate(['homepage']);
  }
  else{
    alert("Wrong Email/Password")
  }
}

}
