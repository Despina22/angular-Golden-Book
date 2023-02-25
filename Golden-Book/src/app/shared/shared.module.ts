import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './components/heading/heading.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { SingleBookComponent } from './components/single-book/single-book.component';

@NgModule({
  declarations: [
    HeadingComponent,
    SearchComponent,
    FilterComponent,
    SingleBookComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeadingComponent,
    SearchComponent,
    FilterComponent,
    SingleBookComponent,
  ],
})
export class SharedModule {}
