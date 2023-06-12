import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaGalleryComponent } from './casa-gallery/casa-gallery.component';
import { CasaDetailComponent } from './casa-detail/casa-detail.component';
<<<<<<< HEAD
import { CasaListComponent } from './casa-list/casa-list.component';

=======
import { CasaReserveComponent } from './children/casa-reserve/casa-reserve.component';
>>>>>>> b2a1f7290221e0a7dd95d23321c83a4ba05157c9

const routes: Routes = [
  
  {path:'', component: CasaGalleryComponent},
  {path: ':id', component: CasaDetailComponent},
  {path:':id/casa-reserve' , component:CasaReserveComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: 'casa-list', component: CasaListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasasRoutingModule { }
