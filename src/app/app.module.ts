import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  NgOptimizedImage} from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CasasModule } from './casas/casas.module';

//navbar
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


import { MatGridListModule } from '@angular/material/grid-list';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CasasModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    UsersModule,
    CategoriesModule,
    CasasModule,
    NgOptimizedImage


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
