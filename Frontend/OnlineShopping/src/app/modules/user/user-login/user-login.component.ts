import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import{UserLoginService} from '../../../services/user/user-login.service'
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html', 
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder, private router:Router, private loginService:UserLoginService) { }
  form: FormGroup;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: [null, [Validators.required]],
      Password: [null, Validators.required]
    });
  }
  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    
    this.loginService.auth(this.loginForm.value).subscribe(data=>{
      localStorage.setItem("UserId",JSON.stringify(data));
      this.router.navigate(['/']);
    },(e)=>{
      console.log(e);
      alert("Wrong usernam/password");
    })

    console.log(this.loginForm.value);
  }


}
