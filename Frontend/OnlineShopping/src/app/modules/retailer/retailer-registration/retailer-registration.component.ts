import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerLoginService } from 'src/app/services/retailer/retailer-login.service';

@Component({
  selector: 'app-retailer-registration',
  templateUrl: './retailer-registration.component.html',
  styleUrls: ['./retailer-registration.component.css']
})
export class RetailerRegistrationComponent implements OnInit {

  retailForm:FormGroup;
  retailInputs: any[]
  constructor(private rb:FormBuilder, private retailer:RetailerLoginService,private router:Router) { }

  ngOnInit(): void {
    this.retailForm=this.rb.group({
      First_Name:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      Last_Name:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      Email:['',Validators.compose([Validators.required,Validators.email])],
      Mobile_Number:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      Address:['',Validators.compose([Validators.required,Validators.minLength(10)])],      
      Password:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(16)])]
    });
  }
  onretailRegister(){
    this.retailer.addUser(this.retailForm.value).subscribe(data=>{
      console.log(data);
      localStorage.setItem("retailerData",JSON.stringify(data));
      this.router.navigate(['/retailerLogin']);
     
    },(e)=>{
      console.log(e);
    })
    console.log(this.retailForm.value);
  }

}
