import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from '../app/layouts/default/default.component'
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UserLoginComponent } from './modules/user/user-login/user-login.component';
import { UserProfileComponent } from './modules/user/user-profile/user-profile.component';
import { UserRegistrationComponent } from './modules/user/user-registration/user-registration.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    children:[{
      path:'',
      component:DashboardComponent
    },{
      path:'userLogin',
      component:UserLoginComponent
    },{
      path:'userProfile',
      component:UserProfileComponent
    },{
      path:'userRegistration',
      component:UserRegistrationComponent
    }]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
