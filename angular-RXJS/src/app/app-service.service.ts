import { User } from './models/users.model';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getData1(): Observable<User> {
    return this.http
      .get<User>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        retry(3),
        catchError((error: any) => {
          console.error('Error:', error);
          return throwError(
            () => new Error('Something went wrong.Try again later.')
          );
        })
      );
  }

  getData2(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}
