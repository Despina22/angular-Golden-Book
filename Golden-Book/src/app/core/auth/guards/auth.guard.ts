import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(): boolean {
    return this.checkLogin();
  }
  canLoad(): boolean {
    return this.checkLogin();
  }

  checkLogin() {
    const user = localStorage.getItem('userData');
    if (user) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
