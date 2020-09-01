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

  getPerson(id) {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  createPerson(person) {
    //return this.http.post(this.baseUrl, JSON.stringify(person));
    console.log('postdata', person);
    // It is returning the observables ( An observable asa ashyncronis object. It is technically a stagged call annd once it is subscribed to it an API then we can say it is a real API call to post the values passed.)of the HTTP client. First parameter below is the URL and second parameter is the JSON object we ae sending.
    return this.http.post(this.baseUrl, person);
  }

  deletePerson(id) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  updatePerson(id, person) {
    return this.http.put(`${this.baseUrl}/${id}`, person);
  }
}
