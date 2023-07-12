import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICasa } from '../models/casa.model';
import { BASE_URL } from 'src/app/shared/constants';


@Injectable({
  providedIn: 'root'
})
export class CasaService {

  url: string = `${BASE_URL}/casas`;
  

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<ICasa[]> {
    return this.httpClient.get<ICasa[]>(this.url);
  }

  // http://localhost:3000/casas?userId=1
  findAllByUserId(userId: number): Observable<ICasa[]> {
    return this.httpClient.get<ICasa[]>(`${this.url}?userId=${userId}`);
  }

  //http://localhost:3000/casas?categories_like=3
  findAllByCategoryId(categoryId: number): Observable<ICasa[]>{
    return this.httpClient.get<ICasa[]>(`${this.url}?categories_like=${categoryId}`);
  }

  findById(id: number): Observable<ICasa> {
    return this.httpClient.get<ICasa>(`${this.url}/${id}`);
  }

  create(casa :ICasa): Observable<ICasa> {
    return this.httpClient.post<ICasa>(this.url, casa);
  }

  update(casa: ICasa): Observable<ICasa> {
    return this.httpClient.put<ICasa>(`${this.url}/${casa.id}`, casa);
  }

  // Opción 1
  // deleteById(id: number): Observable<{}> {
  //  return this.httpClient.delete(`${this.url}/${id}`);
  // }

  // Opción 2:
  httpOptions = {
    observe: 'response' as 'body'
  }
  deleteById(id: number): Observable<HttpResponse<{}>> {
    return this.httpClient.delete<HttpResponse<{}>>(`${this.url}/${id}`, this.httpOptions);
  }



  /*
  createNewReserve(reserve : IReserve): Observable<IReserve>{
   return this.httpClient.post<IReserve>(this.baseUrl, reserve)
  }

  deleteReservation(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
*/

}


