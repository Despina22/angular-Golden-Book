import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './components/heading/heading.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { SingleBookComponent } from './components/single-book/single-book.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeadingComponent,
    SearchComponent,
    FilterComponent,
    SingleBookComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule,
  ],
  exports: [
    HeadingComponent,
    SearchComponent,
    FilterComponent,
    SingleBookComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
