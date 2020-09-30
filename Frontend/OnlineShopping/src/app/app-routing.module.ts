import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from '../app/layouts/default/default.component'
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AddProductComponent } from './modules/retailer/add-product/add-product.component';
import { ProductPageComponent } from './modules/retailer/product-page/product-page.component';
import { RetailerLoginComponent } from './modules/retailer/retailer-login/retailer-login.component';
import { RetailerRegistrationComponent } from './modules/retailer/retailer-registration/retailer-registration.component';
import { ShowProductComponent } from './modules/retailer/show-product/show-product.component';
import { SearchComponent } from './modules/search/search.component';
import { UserLoginComponent } from './modules/user/user-login/user-login.component';
import { UserProfileComponent } from './modules/user/user-profile/user-profile.component';
import { UserRegistrationComponent } from './modules/user/user-registration/user-registration.component';
import {RetailerProfileComponent} from './modules/retailer/retailer-profile/retailer-profile.component';
const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    children:[{
      path:'',
      component:DashboardComponent
    },
    {
      path:'userLogin',
      component:UserLoginComponent
    },
    {
      path:'userProfile',
      component:UserProfileComponent
    },
    {
      path:'userRegistration',
      component:UserRegistrationComponent
    },
    {
      path:'retailerRegistration',
      component:RetailerRegistrationComponent
    },
    {
      path:"search",
      component:SearchComponent
    },
    {
      path:"retailerLogin",
      component:RetailerLoginComponent
    },
    {
      path:"productAddition",
      component:AddProductComponent
    },{
      path:"showProducts",
      component:ShowProductComponent
    },{
      path:"Product",
      component:ProductPageComponent
    },{
      path:"retailerProfile",
      component:RetailerProfileComponent
    }
  ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
