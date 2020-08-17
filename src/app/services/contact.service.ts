import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendContact() : Observable<string>{ 
    return of('contact sent')
  }
}
