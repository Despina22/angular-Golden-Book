import { User } from './models/users.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getData1(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users');
  }

  getData2(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}
