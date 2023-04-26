import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ConfirmDeactivateGuard } from 'src/app/core/guards/confirm-deactivated/confirm-deactivate.guard';
import { SaveFiltersGuard } from 'src/app/core/guards/save-filters/save-filters.guard';

const routes: Routes = [
  { path: '', component: BooksComponent, canDeactivate: [SaveFiltersGuard] },
  {
    path: 'book/:bookId',
    component: BookDetailsComponent,
    canDeactivate: [ConfirmDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
