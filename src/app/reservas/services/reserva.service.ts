import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReserva } from '../reserva-casa/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  
  url : string = "http://localhost:3000/reservas"

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IReserva[]> {
    return this.httpClient.get<IReserva[]>(this.url);
  }

  findById(id: number): Observable<IReserva> {
    return this.httpClient.get<IReserva>(`${this.url}/${id}`);
  }
}
