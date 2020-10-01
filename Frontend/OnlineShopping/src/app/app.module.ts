import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultModule} from './layouts/default/default.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './modules/search/search.component';
import { CarosouelComponent } from './modules/caro/carosouel/carosouel.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { AdminApproveComponent } from './modules/admin/admin-approve/admin-approve.component';
import { RetailerDetailsComponent } from './modules/admin/retailer-details/retailer-details.component';
import { ProductDetailsComponent } from './modules/admin/product-details/product-details.component';
import { HomePageComponent } from './modules/admin/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CarosouelComponent,
    AdminLoginComponent,
    AdminApproveComponent,
    RetailerDetailsComponent,
    ProductDetailsComponent,
    HomePageComponent,
   
  ],
  imports: [
    DefaultModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    FormsModule

 
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
