import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{UserRegistrationService} from '../../../services/user/user-registration.service';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userform: FormGroup;
  userInputs: any[];
  public globalrespone:any;
  constructor(private fb:FormBuilder,private UserRegistration:UserRegistrationService,private router:Router) { }


  ngOnInit(): void {
    this.userform=this.fb.group({
      First_Name:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      Last_Name:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      Email:['',Validators.compose([Validators.required,Validators.email])],
      Mobile_Number:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      Address:['',Validators.compose([Validators.required,Validators.minLength(10)])],      
      Password:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(16)])],  
    });    
  }
  submit() {
   this.UserRegistration.addUser(this.userform.value).subscribe(data=>{
     localStorage.setItem("userData",JSON.stringify(data));
     this.router.navigate(['/userLogin']);
     
   },(e)=>{
     console.log(e);

   })
   console.log(this.userform.value);
  }
  onRegister(){
    
  }

}