import { ChildrenModule } from './children/children.module';
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
        MatIconModule,
        SharedModule,
        MatTableModule
    ]
})
export class CasasModule { }
