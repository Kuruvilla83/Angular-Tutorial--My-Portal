import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

counter=0;  
  constructor() { }

  sendContact() { 
    return of('contact sent')
  }
  getCounter() {
    this.counter++
    return of(this.counter)
  }
  
}
