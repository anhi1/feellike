import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/category.model';
import { Observable } from 'rxjs';
import { BASE_URL} from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = `${BASE_URL}/categories`;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.url);
  }

  findById(id: number): Observable<ICategory> {
    return this.httpClient.get<ICategory>(`${this.url}/${id}`);
  }

  create(category :ICategory): Observable<ICategory> {
    return this.httpClient.post<ICategory>(this.url, category);
  }

  update(category: ICategory): Observable<ICategory> {
    return this.httpClient.put<ICategory>(`${this.url}/${category.id}`, category);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`);
  }
}

