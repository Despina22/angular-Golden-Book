import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, shareReplay } from 'rxjs';
import { Category } from '../../models/category.model';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories$: Observable<Category[]>;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    if (!this.categories$) {
      this.categories$ = this.http
        .get<Category[]>(`${environment.baseApiUrl}categories`)
        .pipe(shareReplay());
    }
    return this.categories$.pipe(
      map((categories: Category[]) =>
        categories.map((category: Category) => category.name)
      )
    );
  }
}
