import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, SharedModule],
  exports: [BooksComponent],
})
export class FeaturesModule {}
