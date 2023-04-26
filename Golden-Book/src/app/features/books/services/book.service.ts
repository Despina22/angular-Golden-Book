import { Injectable } from '@angular/core';
import { Book } from '../../models/single-book.model';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  searchValue$: Subject<string> = new Subject<string>();
  private readonly bookUrl = `${environment.baseApiUrl}books`;

  constructor(private http: HttpClient) {}

  getData(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl).pipe(
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
    const headers = new HttpHeaders({
      PageName: 'Book Overview',
    });
    return this.http.get<Book>(`${this.bookUrl}/${id}`, { headers: headers });
  }

  deleteBook(book: Book): Observable<Book> {
    return this.http.delete<any>(`${this.bookUrl}/${book.id}`);
  }

  softDelete(book: Book): Observable<Book> {
    const now = new Date().toISOString();
    return this.http.patch<Book>(`${this.bookUrl}/${book.id}`, {
      deletedAt: now,
    });
  }
}
