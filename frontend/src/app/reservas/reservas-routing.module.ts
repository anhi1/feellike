import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaCasaComponent } from './reserva-casa/reserva-casa.component';

const routes: Routes = [
  {
    path: ':id',
    component: ReservaCasaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
