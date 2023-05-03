import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.userService
      .getUserByEmailAndPassword(this.email, this.password)
      .pipe(map((users) => users[0]))
      .subscribe((user) => {
        if (user) {
          const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
          };

          localStorage.setItem('userData', JSON.stringify(userData));
          this.router.navigate(['/books']);
        } else {
          alert('You are not registered');
        }
      });
  }
}
