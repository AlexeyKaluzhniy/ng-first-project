import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonFetch } from '../model/person-fetch.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  peopleUrl = 'https://jsonplaceholder.typicode.com/users';

  getPeople() {
    return this.http.get<PersonFetch>(this.peopleUrl);
  }
}