import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaGalleryComponent } from './casa-gallery/casa-gallery.component';
import { CasaDetailComponent } from './casa-detail/casa-detail.component';
<<<<<<< HEAD
import { CasaListComponent } from './casa-list/casa-list.component';

import { CasaReserveComponent } from './children/casa-reserve/casa-reserve.component';
=======
>>>>>>> mani1

const routes: Routes = [
  
  {path:'', component: CasaGalleryComponent},
  {path: ':id', component: CasaDetailComponent},
<<<<<<< HEAD
  {path:':id/casa-reserve' , component:CasaReserveComponent},
  {path: 'casa-list', component: CasaListComponent},
=======
>>>>>>> mani1
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasasRoutingModule { }
