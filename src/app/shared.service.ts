import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private sharedArray: any[] = [];
  sharedArraySubject = new Subject<any[]>();

  updateSharedArray(value: any): void {
    this.sharedArray.push(value);
    this.sharedArraySubject.next(this.sharedArray);
  }
}
