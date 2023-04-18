import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/features/models/single-book.model';
import { BookService } from '../../services/book.service';
import { switchMap, take } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() bookDeleted = new EventEmitter<string>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  deleteBook(book: Book): void {
    this.bookService
      .deleteBook(book)
      .pipe(take(1))
      .subscribe(() => {
        this.bookDeleted.emit();
      });
  }

  softDeleteBook(book: Book): void {
    this.bookService
      .softDelete(book)
      .pipe(take(1))
      .subscribe(() => {
        this.bookDeleted.emit();
      });
  }
}
