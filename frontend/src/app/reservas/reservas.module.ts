import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';

import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MAT_DATE_LOCALE} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ReservaListComponent,
    ReservaFormComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule 
    
   
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ],
})
export class ReservasModule { }
