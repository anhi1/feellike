import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/shared/constants';
import { IReserva } from '../reserva.model';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  url: string = `${BASE_URL}/reservas`;

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<IReserva[]> {
    return this.httpClient.get<IReserva[]>(this.url);
  }

  create(reserva: IReserva): Observable<IReserva> {
    return this.httpClient.post<IReserva>(this.url, reserva);
  }

  update(reserva: IReserva): Observable<IReserva> {
    return this.httpClient.put<IReserva>(`${this.url}`, reserva);
  }

  // deleteById(id: number): void {
  //   this.httpClient.delete(`${this.url}/${id}`);
  // }
}
