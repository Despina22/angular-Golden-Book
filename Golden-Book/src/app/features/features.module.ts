import { BookDetailsComponent } from './books-content/components/book-details/book-details.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books-content/components/books/books.component';
import { SharedModule } from '../shared/shared.module';
import { BookComponent } from './books-content/components/book/book.component';
import { MatCardModule } from '@angular/material/card';
import { CategoryColorDirective } from './directives/category-color.directive';

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
    AppRoutingModule,
    MatIconModule,
  ],
  exports: [
    BooksComponent,
    BookComponent,
    BookDetailsComponent,
    CategoryColorDirective,
  ],
})
export class FeaturesModule {}
