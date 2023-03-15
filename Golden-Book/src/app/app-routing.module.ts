import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './features/books-content/components/books/books.component';
import { BookOverviewComponent } from './features/book-overview/components/book-overview/book-overview.component';

const appRouter: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book/:bookId', component: BookOverviewComponent },
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
