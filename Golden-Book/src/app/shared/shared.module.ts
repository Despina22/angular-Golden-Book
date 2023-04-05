import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from './material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    SidebarComponent,
    PaginationComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    SearchComponent,
    FilterComponent,
    SidebarComponent,
    PaginationComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
