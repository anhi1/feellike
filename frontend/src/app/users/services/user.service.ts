import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { BASE_URL } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = `${BASE_URL}/users`;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url);
  }

  findById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.url}/${id}`);
  }

  create(user :IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.url, user);
  }

  update(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.url}/${user.id}`, user);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
  

