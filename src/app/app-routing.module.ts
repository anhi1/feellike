import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaGalleryComponent } from './casas/casa-gallery/casa-gallery.component';
import { CasaFormComponent } from './casas/casa-form/casa-form.component';
import { CasaListComponent } from './casas/casa-list/casa-list.component';
import { CasaReserveComponent } from './casas/children/casa-reserve/casa-reserve.component';

const routes: Routes = [
  {path: 'casa-gallery', loadChildren:() => import('./casas/casas.module').then(m=>m.CasasModule)},
  {path: 'casa-list', component: CasaListComponent},
  {path: 'casa-form', component: CasaFormComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
