import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { BooksComponent } from 'src/app/features/books/components/books/books.component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class SaveFiltersGuard implements CanDeactivate<BooksComponent> {
  constructor(private dialog: MatDialog) {}

  canDeactivate(component: BooksComponent): Observable<boolean> {
    const modal = this.dialog.open(DialogComponent, {
      data: {
        description: 'Do you want to save filters?',
        title: 'Save Filters',
        oneButton: false,
      },
      position: { top: '40px' },
    });

    const observable = modal.afterClosed().pipe<boolean>(
      map((shouldSave: boolean) => {
        if (shouldSave) {
          const filter = {
            searchedValue: component.searchedValue,
            categoryName: component.categoryName,
          };

          localStorage.setItem('filters', JSON.stringify(filter));
        }
        return shouldSave;
      })
    );
    return observable;
  }
}
