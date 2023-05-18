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
import { MatDialogModule } from '@angular/material/dialog';
import { FullNamePipe } from '../pipes/full-name.pipe';
import { DynamicCardComponent } from './components/dynamic-card/dynamic-card.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    BookDetailsComponent,
    CategoryColorDirective,
    FullNamePipe,
    DynamicCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    BooksRoutingModule,
    MatDialogModule,
  ],
})
export class BooksModule {}
