import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    PaginationComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    SearchComponent,
    FilterComponent,
    PaginationComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
