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


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CarosouelComponent,
    AdminLoginComponent,
    AdminApproveComponent,
    RetailerDetailsComponent,
    ProductDetailsComponent,
   
  ],
  imports: [
    DefaultModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
 
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
