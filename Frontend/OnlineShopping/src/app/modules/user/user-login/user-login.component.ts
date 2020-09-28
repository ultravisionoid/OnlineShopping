import { Component, OnInit, Inject } from '@angular/core';
import{ FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import{UserLoginService} from '../../../services/user/user-login.service'
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html', 
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder, private router:Router, private loginService:UserLoginService,@Inject(DOCUMENT) private _document: Document) { }
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
      this.loginService.getByid(JSON.stringify(data)).subscribe(user=>{
        console.log(user["First_name"]);
        localStorage.setItem("userData",JSON.stringify(user));
        localStorage.setItem("name",JSON.stringify(user["First_Name"]+" "+user["Last_Name"]));
        localStorage.setItem("login","false");
        
      },(e)=>{
        console.log(e);
      })


      localStorage.setItem("UserId",JSON.stringify(data));
      localStorage.setItem("login","false");
      // this._document.defaultView.location.reload()
      this._document.location.href = '/';
      this.router.navigate(['/']);
    },(e)=>{
      console.log(e);
      alert("Wrong usernam/password");
    })

    console.log(this.loginForm.value);
  }


}
