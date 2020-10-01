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
import { ShowProductComponent } from './show-product/show-product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CategoryComponent } from './category/category.component';
import { CompareComponent } from './compare/compare.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    RetailerLoginComponent,
    RetailerRegistrationComponent,
    RetailerProfileComponent,
    AddProductComponent,
    ShowProductComponent,
    ProductPageComponent,
    CategoryComponent,
    CompareComponent,
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
    RouterModule,
    MatListModule,
    NgbModule,
    MatIconModule,
    Ng2SearchPipeModule
    
  ],
  exports:[
    RetailerLoginComponent,
    RetailerRegistrationComponent,
    RetailerProfileComponent,
    AddProductComponent,
    ShowProductComponent

  ]
})
export class RetailerModule { }
