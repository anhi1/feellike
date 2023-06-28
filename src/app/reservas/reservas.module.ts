import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservaCasaComponent } from './reserva-casa/reserva-casa.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReservaCasaComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReservasModule { }
