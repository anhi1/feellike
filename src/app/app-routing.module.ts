import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaFormComponent } from './casas/casa-form/casa-form.component';
import { CasaListComponent } from './casas/casa-list/casa-list.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) // lazy loading
  },
  {
    path: 'casas',
    loadChildren: () => import('./casas/casas.module').then(m => m.CasasModule) // lazy loading
  },
  {
    path: '', redirectTo: 'casas', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'casas', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
