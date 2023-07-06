import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:3000/auth';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(login: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, login);
  }

  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/register`, user);
  }

  logout() {
    //cerrar sesion
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/auth/login']); //redireccion hacia login con router navigate
  }

  isLoggedIn() { // si ha inciado sesion
    return localStorage.getItem('jwt_token') !== null; //si es distinto qu null quiere decir que ha logado
  }
}
