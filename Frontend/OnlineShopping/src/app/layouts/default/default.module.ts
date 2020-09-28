import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../shared/shared.module'
import { UserModule } from 'src/app/modules/user/user.module';
import {MatSidenavModule} from '@angular/material/sidenav'
import{RetailerModule} from '../../modules/retailer/retailer.module'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    
    DefaultComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UserModule,
    MatSidenavModule,
    RetailerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule
  ]
})
export class DefaultModule { }
