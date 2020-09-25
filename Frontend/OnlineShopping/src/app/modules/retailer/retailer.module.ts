import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { RetailerRegistrationComponent } from './retailer-registration/retailer-registration.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    RetailerLoginComponent,
    RetailerRegistrationComponent,
    RetailerProfileComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RetailerLoginComponent,
    RetailerRegistrationComponent,
    RetailerProfileComponent,
    AddProductComponent,

  ]
})
export class RetailerModule { }
