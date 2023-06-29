import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
 
  url: string = "http://localhost:3000/comments/"
  findById: any;

  constructor(private httpClient: HttpClient) { } // httpclient get

  getAllCommentsByCasaId(casaId: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${this.url}?casaId=${casaId}`)  
}
}
