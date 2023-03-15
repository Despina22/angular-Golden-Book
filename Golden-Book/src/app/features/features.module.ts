import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books-content/components/books/books.component';
import { SharedModule } from '../shared/shared.module';
import { SingleBookComponent } from './books-content/components/single-book/single-book.component';
import { MatCardModule } from '@angular/material/card';
import { BookOverviewComponent } from './book-overview/components/book-overview/book-overview.component';

@NgModule({
  declarations: [BooksComponent, SingleBookComponent, BookOverviewComponent],
  imports: [CommonModule, SharedModule, MatCardModule, AppRoutingModule],
  exports: [BooksComponent, SingleBookComponent, BookOverviewComponent],
})
export class FeaturesModule {}
