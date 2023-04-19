import { BookService } from 'src/app/features/books/services/book.service';
import { Book } from './../../../models/single-book.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, take } from 'rxjs';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
})
export class BooksTableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'url',
    'title',
    'author',
    'publishedDate',
    'category',
    'description',
    'isbn',
    'authorDescription',
  ];
  dataSource: Book[];
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService
      .getData()
      .pipe(take(1))
      .subscribe((data) => (this.dataSource = data));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
