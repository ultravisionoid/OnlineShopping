import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userform: FormGroup;
  userInputs: any[];

  constructor(private fb:FormBuilder) { }
  form: FormGroup;
  ngOnInit(): void {
    // this.userform=this.fb.group({
    //   Name:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
    //   Email:['',Validators.compose([Validators.required,Validators.email])],
    //   Mobile:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
    //   Address:['',Validators.compose([Validators.required,Validators.minLength(10)])],      
    //   Password:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(16)])],  
    // });

    this.form = new FormGroup({  
      FirstName : new FormControl("", [Validators.required,Validators.pattern('[aA-zZ]*')]),
      LastName:  new FormControl("", [Validators.required,Validators.pattern('[aA-zZ]*')]),
      mobile: new FormControl("", [Validators.required, Validators.pattern('[0-9]*')]),  
      email: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("",[Validators.required,Validators.minLength(10)]),
      password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(16)])  
      
      })

  }
  onRegister(){

  }

  AddUser(form) {
    alert("Hello");
    console.log(form.value);
    alert(form.value);
  }
}
