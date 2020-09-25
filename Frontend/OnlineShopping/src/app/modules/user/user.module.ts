import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {UserProfileComponent} from './user-profile/user-profile.component'


@NgModule({
  declarations: [
    UserLoginComponent,
    UserProfileComponent,
    UserRegistrationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserProfileComponent,
    UserRegistrationComponent,
    UserLoginComponent
  ]
})
export class UserModule { }
