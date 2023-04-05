import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from 'src/app/features/models/single-book.model';
import { BookService } from '../../services/book.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService
      .getData()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => (this.books = data));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
