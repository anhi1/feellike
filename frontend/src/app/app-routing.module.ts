import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) // lazy loading
  },
  {
    path: 'casas',
    loadChildren: () => import('./casas/casas.module').then(m => m.CasasModule) 
  },

  {
    path: 'casas/casa-forms',
    loadChildren: () => import('./casas/casas.module').then(m => m.CasasModule) 
  },
  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then(m => m.ReservasModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
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
