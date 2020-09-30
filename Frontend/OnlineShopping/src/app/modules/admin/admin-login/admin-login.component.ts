import { Component, OnInit } from '@angular/core';
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
  constructor(private formBuilder: FormBuilder,private router : Router) { 
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: [null, [Validators.required]],
      Password: [null, Validators.required]
    });
  }

submit(){
  if(this.loginForm.value["Email"]=="sai@gmail.com" && this.loginForm.value["Password"]=="sai")
  {
    this.router.navigate(['retailerdetails']);
  }
  else{
    alert("Wrong Email/Password")
  }
}

}
