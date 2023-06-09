import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../services/reserva.service';
import { IReserva } from '../reserva.model';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent implements OnInit {
  reservaForm = new FormGroup({
    id: new FormControl<number>(0),
    price: new FormControl<number>(0, [
      Validators.required, Validators.min(5), Validators.max(500), Validators.pattern("^[0-9]+([.,][0-9]{1,2})?$")
    ]),
    startDate: new FormControl<Date>(new Date()),
    finishDate: new FormControl<Date>(new Date()),
  });
  casaId: number | undefined;


  constructor(
    private reservaService: ReservaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    // Extraer id de book de la url para poder enviarlo luego a backend para crear una reserva asociada a esa casa
    this.activatedRoute.params.subscribe(params => {
      const idString = params['casaId'];
      if (!idString) return;
      this.casaId = parseInt(idString, 10);
    });
  }


  save(): void {
    let id = this.reservaForm.get('id')?.value ?? 0;
    let price = this.reservaForm.get('price')?.value ?? 5;
    let startDate = this.reservaForm.get('startDate')?.value ?? new Date();
    let finishDate = this.reservaForm.get('finishDate')?.value ?? new Date();

    let reserva: IReserva = {
      id: id,
      price: price,
      startDate: startDate,
      finishDate: finishDate,
      casa: {
        id: this.casaId,
      }
    }

    if (id === 0)
      this.reservaService.create(reserva)
      .subscribe(reserva => this.router.navigate(['/reservas']));
    else
      this.reservaService.update(reserva)
      .subscribe(reserva => this.router.navigate(['/reservas']));
  }


}
