import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaGalleryComponent } from './casa-gallery/casa-gallery.component';
import { CasaDetailComponent } from './casa-detail/casa-detail.component';

import { CasaListComponent } from './casa-list/casa-list.component';
import { CasaFormComponent } from './casa-form/casa-form.component';



const routes: Routes = [
  {
    path: '',
    component: CasaListComponent,
  },
  {
    path: 'new',
    component: CasaFormComponent,
  },
  {
    path: ':id',
    component: CasaDetailComponent
  },
  {
    path: ':id/edit',
    component: CasaFormComponent
  },
  {
  path: 'user/:userId',
  component: CasaListComponent,
  },
  {
    path: 'category/:categoryId',
    component: CasaListComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasasRoutingModule { }
