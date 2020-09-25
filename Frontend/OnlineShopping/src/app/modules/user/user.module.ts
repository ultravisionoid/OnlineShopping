import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {UserProfileComponent} from './user-profile/user-profile.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
@NgModule({
  declarations: [
    UserLoginComponent,
    UserProfileComponent,
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports:[
    UserProfileComponent,
    UserRegistrationComponent,
    UserLoginComponent
  ]
})
export class UserModule { }
