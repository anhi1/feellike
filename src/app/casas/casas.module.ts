import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasasRoutingModule } from './casas-routing.module';
import { CasaListComponent } from './casa-list/casa-list.component';
import { CasaGalleryComponent } from './casa-gallery/casa-gallery.component';
import { CasaDetailComponent } from './casa-detail/casa-detail.component';
import { CasaFormComponent } from './casa-form/casa-form.component';



@NgModule({
  declarations: [
    CasaListComponent,
    CasaGalleryComponent,
    CasaDetailComponent,
    CasaFormComponent,
    
  ],
  imports: [
    CommonModule,
    CasasRoutingModule
  ]
})
export class CasasModule { }
