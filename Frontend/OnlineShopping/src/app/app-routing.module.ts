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
import { CategoryComponent } from './modules/retailer/category/category.component';
import { CompareComponent } from './modules/retailer/compare/compare.component';
import { RetailerDetailsComponent } from './modules/admin/retailer-details/retailer-details.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { ProductDetailsComponent } from './modules/admin/product-details/product-details.component';
import { AdminApproveComponent } from './modules/admin/admin-approve/admin-approve.component';
import { HomePageComponent } from './modules/admin/home-page/home-page.component';
import { WishlistComponent } from './modules/user/wishlist/wishlist.component';
import { CartComponent } from './modules/user/cart/cart.component';
import { ForgotPasswordComponent } from './modules/user/forgot-password/forgot-password.component';
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
    },{
      path:"category",
      component:CategoryComponent
    },{
      path:"compare",
      component:CompareComponent
    },{
      path:"retailerdetails",
      component:RetailerDetailsComponent
    },{
      path:"adminLogin",
      component:AdminLoginComponent
    },{
      path:"productdetails",
      component:ProductDetailsComponent
    },{
      path:"approverequests",
      component:AdminApproveComponent
    },{
      path:"homepage",
      component:HomePageComponent
    },{
      path:"wishlist",
      component:WishlistComponent
    },{
      path:"cart",
      component:CartComponent
    },{
      path:"forgotpassword",
      component:ForgotPasswordComponent
    }
  ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
