import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BookComponent } from 'src/app/features/books/components/book/book.component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDeactivateGuard implements CanDeactivate<BookComponent> {
  constructor(private dialog: MatDialog) {}

  canDeactivate(): Observable<boolean> {
    const modal = this.dialog.open(DialogComponent, {
      data: {
        description: 'Are you sure that you want to leave page?',
        title: 'Book Details',
        oneButton: false,
        buttonTextConfirm: 'Ok',
        buttonTextNoConfirm: 'Cancel',
      },
      position: { top: '40px' },
    });

    const observable = modal
      .afterClosed()
      .pipe<boolean>(map((shouldSave: boolean) => (shouldSave ? true : false)));
    return observable;
  }
}
