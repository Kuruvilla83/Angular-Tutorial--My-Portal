import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Person } from '../static/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  baseUrl = 'http://localhost:3000/person';
  constructor(protected http: HttpClient) {}
  getPersons() {
    //return this.http.get<any[]>(this.baseUrl);
    return this.http.get<Person[]>(this.baseUrl);
  }
}
