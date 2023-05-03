import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/auth/components/login/login.component';
import { RegistrationComponent } from './core/auth/components/registration/registration.component';
import { AuthGuard } from './core/auth/guards/auth-guard/auth.guard';
import { LayoutBooksComponent } from './core/layouts/components/layout-books/layout-books.component';
import { LayoutRegistrationComponent } from './core/layouts/components/layout-registration/layout-registration.component';
import { HomepageTextComponent } from './features/homepage/components/homepage-text/homepage-text.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AdminGuard } from './core/auth/guards/admin-guard/admin.guard';

const appRouter: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  {
    path: 'registration',
    component: LayoutRegistrationComponent,
    children: [
      { path: '', component: HomepageTextComponent },
      { path: 'login', component: LoginComponent },
      { path: 'sign-in', component: RegistrationComponent },
    ],
  },
  {
    path: '',
    component: LayoutBooksComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      {
        path: 'books',
        loadChildren: () =>
          import('../app/features/books/books.module').then(
            (module) => module.BooksModule
          ),
      },
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('../app/features/admin/admin.module').then(
            (module) => module.AdminModule
          ),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
