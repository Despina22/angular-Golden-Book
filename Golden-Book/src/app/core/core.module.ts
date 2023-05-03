import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './auth/components/login/login.component';
import { LayoutBooksComponent } from './layouts/components/layout-books/layout-books.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRegistrationComponent } from './layouts/components/layout-registration/layout-registration.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { MatSelectModule } from '@angular/material/select';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  LoginComponent,
  LayoutBooksComponent,
  LayoutRegistrationComponent,
];

@NgModule({
  declarations: [...COMPONENTS, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule,
  ],
  exports: [...COMPONENTS],
})
export class CoreModule {}
