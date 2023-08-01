import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../services/reserva.service';
import { IReserva } from '../reserva.model';
import { CasaService } from 'src/app/casas/services/casa.service';
import { ICasa } from 'src/app/casas/models/casa.model';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent implements OnInit {
  reservaForm = new FormGroup({
    id: new FormControl<number>(0),
    // price: new FormControl<number>(0, [
    //   Validators.required, Validators.min(5), Validators.max(1000), Validators.pattern("^[0-9]+([.,][0-9]{1,2})?$")
    // ]),
    startDate: new FormControl<Date>(new Date()),
    endDate: new FormControl<Date>(new Date()),
  });
  casaId: number | undefined;
  casa: ICasa  | undefined;


  constructor(
    private reservaService: ReservaService,
    private activatedRoute: ActivatedRoute,
    private casaService: CasaService,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    // Extraer id de book de la url para poder enviarlo luego a backend para crear una reserva asociada a esa casa
    this.activatedRoute.params.subscribe(params => {
      const idString = params['casaId'];
      if (!idString) return;
      this.casaId = parseInt(idString, 10);
      this.casaService.findById(this.casaId).subscribe(data => this.casa = data);
    });
  }


  save(): void {
    let id = this.reservaForm.get('id')?.value ?? 0;
    //let price = this.reservaForm.get('price')?.value ?? 5;
    let startDate = this.reservaForm.get('startDate')?.value ?? new Date();
    let endDate = this.reservaForm.get('endDate')?.value ?? new Date();

    let reserva: IReserva = {
      id: id,
      price: this.casa.price,
      startDate: startDate,
      endDate: endDate,
      casa: {
        id: this.casaId,
      }
    }

    if (id === 0)
      this.reservaService.create(reserva)
      .subscribe(reserva => this.router.navigate(['/reservas']));
    else
      this.reservaService.update(reserva)
      .subscribe(reserva => this.router.navigate(['/reservas', reserva.id, '/edit']));
  }


}


