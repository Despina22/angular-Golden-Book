import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AdminRoutingModule } from './admin-routing.module';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [BooksTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
  ],
})
export class AdminModule {}
