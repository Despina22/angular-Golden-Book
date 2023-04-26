import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { LayoutBooksComponent } from './core/components/layout-books/layout-books.component';
import { AuthGuard } from './core/auth/guards/auth.guard';

const appRouter: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutBooksComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      {
        path: 'books',
        loadChildren: () =>
          import('../app/features/books/books.module').then(
            (module) => module.BooksModule
          ),
        canLoad: [AuthGuard],
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../app/features/admin/admin.module').then(
            (module) => module.AdminModule
          ),
        canLoad: [AuthGuard],
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
