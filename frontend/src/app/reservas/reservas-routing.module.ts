import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaCasaComponent } from './reserva-casa/reserva-casa.component';

const routes: Routes = [
  
  {
    path: 'casaId/:casaId',
    component: ReservaCasaComponent
  },
  {
    path: '**', redirectTo: 'reservas', pathMatch: 'full'
  },
  {
    path: '', redirectTo: 'reservas', pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
