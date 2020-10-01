import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ForgetpasswordService} from '../../../services/user/forgetpassword.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  msgVerificationForm: FormGroup;
  userPhonenumber:string='';
  passwordUpdateForm:FormGroup;
  otp:string='';
  passwordUpdateCheck:boolean=false;
  msgCheck:boolean=false;
  otpCheck:string='';
  otpConfirm:boolean=false;

  constructor(private _fpService:ForgetpasswordService,private _formBuilder:FormBuilder ,private router:Router) { 
    this.msgVerificationForm=this._formBuilder.group({
      Mobile_Number: ['', [Validators.required]],
    })
    this.passwordUpdateForm=this._formBuilder.group({
      Password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  sendOtp(){
    this._fpService.sendmsgVerification(this.msgVerificationForm.value).subscribe(
      result => {
        this.userPhonenumber=this.msgVerificationForm.value;
        this.otp=result.toString();
        console.log(this.otp.length);

        if(this.otp.length==4){
          console.log("OTP Sent Sucessfully "+this.otp);
          this.msgCheck=true;
        }
        else{
          console.log(result)
        }
      });
  }
  checkOtp(){
    if(this.otp==this.otpCheck){
      this.otpConfirm=true;
    }
    else
    alert("Wrong OTP");

  
  }
  updatePassword(){
    let data={
      "Mobile_Number":this.userPhonenumber['Mobile_Number'],
      "Password":this.passwordUpdateForm.value['Password']
    }
    console.log(data);
    this._fpService.confirmPasswordUpdation(data).subscribe(
      result=>{
        alert(result);
        this.router.navigate(['/userLogin']);
      });  
    }
  }


