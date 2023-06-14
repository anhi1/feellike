import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CasasRoutingModule } from './casas-routing.module';
import { CasaListComponent } from './casa-list/casa-list.component';
import { CasaGalleryComponent } from './casa-gallery/casa-gallery.component';
import { CasaDetailComponent } from './casa-detail/casa-detail.component';
import { CasaFormComponent } from './casa-form/casa-form.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from "../shared/shared.module";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({

  declarations: [
    CasaListComponent,
    CasaGalleryComponent,
    CasaDetailComponent,
    CasaFormComponent,

  ],
  imports: [
    CommonModule,
    CasasRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    SharedModule,
    MatIconModule,
    MatSnackBarModule


  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-Es'}
  ]

})
export class CasasModule { }
