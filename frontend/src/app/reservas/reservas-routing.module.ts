import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';

const routes: Routes = [
  {
    path: '',
    component: ReservaListComponent
  },
  {
    path: ':casaId/new',
    component: ReservaFormComponent
  },
  {
    path: ':id/edit',
    component: ReservaFormComponent
  }
//{
// path: '**', redirectTo: 'reservas', pathMatch: 'full'
// },
//{
//   path: '', redirectTo: 'reservas', pathMatch: 'full'
// }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
