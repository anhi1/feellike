import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    UserDetailComponent,
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    

  ]
})
export class UsersModule { }
