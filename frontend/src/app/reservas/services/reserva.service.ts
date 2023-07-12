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

  getAllReservasByCasaId(casaId: number): Observable<IReserva[]> {
    return this.httpClient.get<IReserva[]>(`${this.url}/${casaId}`);
}
   create(reserva :IReserva): Observable<IReserva> {
     return this.httpClient.post<IReserva>(this.url, reserva);
   }

   update(reserva: IReserva): Observable<IReserva> {
     return this.httpClient.put<IReserva>(`${this.url}/${reserva.id}`, reserva);
   }

  // deleteById(id: number): void {
  //   this.httpClient.delete(`${this.url}/${id}`);
  // }
}
