import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryData } from '../../models/category.model';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryData[]> {
    return this.http.get<CategoryData[]>(`${environment.baseApiUrl}categories`);
  }
}
