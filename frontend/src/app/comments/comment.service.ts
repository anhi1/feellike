import { Injectable } from '@angular/core';
import { IComment } from './comment.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
 import { BASE_URL } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url: string = `${BASE_URL}/comments`;
  getAllCommentsByCasaId: any;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url);
  }

  create(comment :IComment): Observable<IComment> {
    return this.httpClient.post<IComment>(this.url, comment);
  }

  update(comment: IComment): Observable<IComment> {
    return this.httpClient.put<IComment>(`${this.url}`, comment);
  }
}
