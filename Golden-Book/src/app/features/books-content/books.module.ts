import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryColorDirective } from '../directives/category-color.directive';
import { BooksRoutingModule } from './books-routing.module';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    BookDetailsComponent,
    CategoryColorDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    BooksRoutingModule,
  ],
  exports: [
    BooksComponent,
    BookComponent,
    BookDetailsComponent,
    CategoryColorDirective,
  ],
})
export class BooksModule {}
