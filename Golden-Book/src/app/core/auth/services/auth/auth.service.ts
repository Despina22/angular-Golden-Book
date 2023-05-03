import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('userData'));
    return user.role === 'admin';
  }
}
