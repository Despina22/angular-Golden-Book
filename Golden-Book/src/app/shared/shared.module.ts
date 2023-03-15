import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterComponent } from './components/filter/filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [SearchComponent, FilterComponent, PaginationComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SearchComponent, FilterComponent, PaginationComponent],
})
export class SharedModule {}
