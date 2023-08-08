import { Component, OnInit } from '@angular/core';
import { IReserva } from '../reserva.model';
import { ReservaService } from '../services/reserva.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/services/user.service';

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
    private router: Router,
    private userService: UserService,
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