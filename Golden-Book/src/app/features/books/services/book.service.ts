import { Injectable } from '@angular/core';
import { Book } from '../../models/single-book.model';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  searchValue$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  getData(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.baseApiUrl}books`).pipe(
      map((books) => books.filter((book) => book.deletedAt === null)),
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(
          () => new Error('Something went wrong.Try again later.')
        );
      })
    );
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${environment.baseApiUrl}books/${id}`);
  }

  deleteData(book: Book): Observable<Book> {
    return this.http.delete<any>(`${environment.baseApiUrl}books/${book.id}`);
  }

  softDelete(book: Book): Observable<Book> {
    const now = new Date().toISOString();
    return this.http
      .patch(`${environment.baseApiUrl}books/${book.id}`, { deletedAt: now })
      .pipe(
        map((book: Book) => {
          book.deletedAt = new Date(now);
          return book;
        })
      );
  }
}
