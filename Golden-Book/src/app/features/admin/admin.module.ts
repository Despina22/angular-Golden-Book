import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [BooksTableComponent],
  imports: [CommonModule, AdminRoutingModule, MatTableModule, MatIconModule],
})
export class AdminModule {}
