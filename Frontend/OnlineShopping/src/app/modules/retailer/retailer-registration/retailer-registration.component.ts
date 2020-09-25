import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-retailer-registration',
  templateUrl: './retailer-registration.component.html',
  styleUrls: ['./retailer-registration.component.css']
})
export class RetailerRegistrationComponent implements OnInit {

  retailForm:FormGroup;
  retailInputs: any[]
  constructor(private rb:FormBuilder) { }

  ngOnInit(): void {
    this.retailForm=this.rb.group({
      Name:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      Email:['',Validators.compose([Validators.required,Validators.email])],
      Mobile:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      Address:['',Validators.compose([Validators.required,Validators.minLength(10)])],      
      Password:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(16)])],  
    });
  }
  onretailRegister(){

  }

}
