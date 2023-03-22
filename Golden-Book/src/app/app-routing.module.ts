import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './features/books-content/components/books/books.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { BookDetailsComponent } from './features/books-content/components/book-details/book-details.component';

const appRouter: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book/:bookId', component: BookDetailsComponent },
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
