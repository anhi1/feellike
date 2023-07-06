import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //extraer el token  getItem()pasarle un identificador
    let token = localStorage.getItem('jwt_token');

    
    if(token){ //comprobamos si el token existe, si existe tenemos q agregarle a la peticion
      request = request.clone({   //la clonamos para poder modificarla
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
    });
  } 
    return next.handle(request); //que siga hacia adelante que continue // llama al siguiente interceptr
  }
}
