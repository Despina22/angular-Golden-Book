import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterComponent } from './components/filter/filter.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { MaterialModule } from './material/material.module';
import { SearchComponent } from './components/search/search.component';
import { ReadMoreDialogComponent } from './components/read-more-dialog/read-more-dialog.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  SearchComponent,
  FilterComponent,
  PaginationComponent,
  PageNotFoundComponent,
];
@NgModule({
  declarations: [...COMPONENTS, ReadMoreDialogComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
