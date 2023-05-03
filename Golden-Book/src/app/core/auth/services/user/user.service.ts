import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userUrl = `${environment.baseApiUrl}users`;

  constructor(private http: HttpClient) {}

  getUserByEmailAndPassword(
    email: string,
    password: string
  ): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.userUrl}?email=${email}&password=${password}`
    );
  }

  userRegistration(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }
}
