import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { RetailerRegistrationComponent } from './retailer-registration/retailer-registration.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import { RouterModule } from '@angular/router';
import{MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    RetailerLoginComponent,
    RetailerRegistrationComponent,
    RetailerProfileComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    RouterModule
    
  ],
  exports:[
    RetailerLoginComponent,
    RetailerRegistrationComponent,
    RetailerProfileComponent,
    AddProductComponent,

  ]
})
export class RetailerModule { }
