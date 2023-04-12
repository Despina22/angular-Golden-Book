import { Book } from 'src/app/features/models/single-book.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Subject, catchError, take, throwError } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  unsubscribe$: Subject<void> = new Subject<void>();
  bookId: string;
  bookDetails: Book;

  constructor(
    private activatedRouter: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookId = this.activatedRouter.snapshot.paramMap.get('bookId');

    this.bookService
      .getById(+this.bookId)
      .pipe(take(1))
      .subscribe({
        next: (book) => (this.bookDetails = book),
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
