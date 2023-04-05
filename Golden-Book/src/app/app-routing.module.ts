import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const appRouter: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: () =>
      import('../app/features/books-content/books.module').then(
        (module) => module.BooksModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/features/admin/admin.module').then(
        (module) => module.AdminModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
