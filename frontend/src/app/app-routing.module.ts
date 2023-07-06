import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaDetailComponent } from './casas/casa-detail/casa-detail.component';


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
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then(m => m.ReservasModule) // lazy loading
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) // lazy loading
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
