import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { CasasRoutingModule } from './casas-routing.module';
import { CasaListComponent } from './casa-list/casa-list.component';
import { CasaGalleryComponent } from './casa-gallery/casa-gallery.component';
import { CasaDetailComponent } from './casa-detail/casa-detail.component';
import { CasaFormComponent } from './casa-form/casa-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { SharedModule } from "../shared/shared.module";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';




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
    MatGridListModule,
    MatListModule,
    MatSnackBarModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    SharedModule,
    
    


  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-Es'}
  ]

})
export class CasasModule { }
