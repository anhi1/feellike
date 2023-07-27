import { Component, OnInit } from '@angular/core';
import { IReserva } from '../reserva.model';
import { ReservaService } from '../services/reserva.service';
import { Router } from '@angular/router';

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

  constructor(
    private reservaService: ReservaService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loadReservas();
  }
  loadReservas() {
    this.reservaService.findAll()
    .subscribe(data => this.reservas = data);
  }

  deleteById(id: number){
    this.reservaService.deleteById(id).subscribe(data => {
      console.log(data);
      this.loadReservas();
    });
  }


}