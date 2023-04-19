import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { Book } from 'src/app/features/models/single-book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  books: Book[];
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
    this.searchBook();
  }

  getBooks(): void {
    this.bookService
      .getData()
      .pipe(take(1))
      .subscribe((data) => (this.books = data));
  }

  searchBook(): void {
    this.bookService.searchValue$
      .asObservable()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        console.log('Search', data);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
