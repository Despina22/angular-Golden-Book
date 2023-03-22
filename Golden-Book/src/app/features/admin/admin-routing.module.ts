import { NgModule } from '@angular/core';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'books', component: BooksTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
