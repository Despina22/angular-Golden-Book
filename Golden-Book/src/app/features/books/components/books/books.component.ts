import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { Book } from 'src/app/features/models/single-book.model';
import { BookService } from '../../services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  books: Book[];
  private unsubscribe$: Subject<void> = new Subject<void>();
  categoryName: string[] = [];
  searchedValue: string = '';

  constructor(private bookService: BookService, private dialog: MatDialog) {}

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
        this.searchedValue = data;
      });
  }

  storeCategory(categoryName: string[]) {
    this.categoryName = categoryName;
  }

  ngOnDestroy(): void {
    this.dialog
      .open(DialogComponent, {
        data: {
          description: 'Do you want to save filters?',
          title: 'Save Filters',
          oneButton: false,
        },
        position: { top: '40px' },
      })
      .afterClosed()
      .subscribe((shouldSave) => {
        if (shouldSave) {
          const filter = {
            searchedValue: this.searchedValue,
            categoryName: this.categoryName,
          };

          localStorage.setItem('filters', JSON.stringify(filter));
        }
      });

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
