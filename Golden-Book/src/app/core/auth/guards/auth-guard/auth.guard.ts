import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(): boolean {
    return this.checkLogin();
  }

  canActivateChild(): boolean {
    return this.checkLogin();
  }

  checkLogin() {
    const user = localStorage.getItem('userData');
    if (user) {
      return true;
    }

    this.router.navigate(['registration/login']);
    return false;
  }
}
