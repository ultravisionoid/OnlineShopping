import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  productform:FormGroup;
  constructor(private pb:FormBuilder) { }

  ngOnInit(): void {
    this.productform=this.pb.group({
      RetailerId:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(5),Validators.pattern("[0-9]{3}$")])],
      ProductName:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      ProductDesc:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(100)])],
      ProductPrice:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(5),Validators.pattern("[0-9]{3}$")])],
      ProductCategory:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20),
      ])],
      ImageURL:['',Validators.required]
    });
  }

}
