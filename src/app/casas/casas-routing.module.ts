import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaGalleryComponent } from './casa-gallery/casa-gallery.component';
import { CasaDetailComponent } from './casa-detail/casa-detail.component';
import { CasaListComponent } from './casa-list/casa-list.component';


const routes: Routes = [
  
  {path:'', component: CasaGalleryComponent},
  {path: ':id', component: CasaDetailComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: 'casa-list', component: CasaListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasasRoutingModule { }
