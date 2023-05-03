import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, take } from 'rxjs';
import { Country } from 'src/app/shared/models/country.model';
import { CountryService } from 'src/app/shared/services/country/country.service';
import { UserService } from '../../services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/shared/components/message-dialog/message-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  hide = true;
  countries: Country[];
  registrationForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[A-Z][a-z]*$'),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[A-Z][a-z]*$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\w[a-zA-Z0-9.!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?]*$/),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\w[a-zA-Z0-9.!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?]*$/),
      ]),
      countryId: new FormControl(),
    },
    { validators: this.checkPasswords }
  );

  constructor(
    private countryService: CountryService,
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCountryName();
  }

  getCountryName() {
    this.countryService
      .getCountries()
      .pipe(take(1))
      .subscribe((data) => {
        this.countries = data;
      });
  }

  checkPasswords(registerForm: FormGroup) {
    const password = registerForm.get('password').value;
    const confirmPassword = registerForm.get('confirmPassword').value;

    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  onRegister(): void {
    if (this.registrationForm.valid) {
      const user = {
        ...this.registrationForm.value,
        role: 'user',
        createdAt: new Date().toISOString(),
      };
      delete user.confirmPassword;

      this.userService
        .userRegistration(user)
        .pipe(take(1))
        .subscribe(() => {
          this.openDialog('You are successfully registered');
          this.router.navigate(['/registration/login']);
        });
    }
  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      position: { top: '40px' },
      data: { message: message },
    });
    dialogRef.afterClosed().subscribe();
  }
}
