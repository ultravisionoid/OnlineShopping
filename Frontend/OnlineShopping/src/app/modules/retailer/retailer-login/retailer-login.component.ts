import { Component, OnInit, Inject } from '@angular/core';
import{ FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {RetailerLoginService} from "../../../services/retailer/retailer-login.service"


@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css']
})
export class RetailerLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder, private router:Router ,@Inject(DOCUMENT) private _document: Document,private loginService:RetailerLoginService) { }
  form: FormGroup; 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: [null, [Validators.required]],
      Password: [null, Validators.required]
    });
  }
  submit(){
  
    console.log(this.loginForm.value);

    this.loginService.auth(this.loginForm.value).subscribe(data=>{
      this.loginService.getById(JSON.stringify(data)).subscribe(user=>{
        localStorage.setItem("name",JSON.stringify(user));

      })




      console.log(data);
      localStorage.setItem("retailerData",JSON.stringify(data));
      localStorage.setItem("name",JSON.stringify(data["First_Name"]+" "+data["Last_Name"]));
      localStorage.setItem("login","false");
      localStorage.setItem("person","retailer");
      this._document.location.href = '/retailerProfile';
      this.router.navigate(["/retailerProfile"]);      
    },(e)=>{
      console.log(e);
      alert("Wrong email/password");
    })



  }

}
