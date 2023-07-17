import { Component, OnInit } from '@angular/core';
import { IReserva } from '../reserva.model';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

  displayedColumns: string[] = [
    'price',
    'startDate',
    'endDate',
    'actions',
  ];
  reservas: IReserva[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.reservaService.findAll()
    .subscribe(data => this.reservas = data);
  }


}