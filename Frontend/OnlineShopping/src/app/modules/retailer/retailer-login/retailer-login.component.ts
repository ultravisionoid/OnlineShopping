import { Component, OnInit, Inject } from '@angular/core';
import{ FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css']
})
export class RetailerLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder, private router:Router ,@Inject(DOCUMENT) private _document: Document) { }
  form: FormGroup; 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: [null, [Validators.required]],
      Password: [null, Validators.required]
    });
  }
  submit(){
    console.log(this.loginForm.value);
  }

}
