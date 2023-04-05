import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../enums/category.enum';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [
    Category.LITERARY,
    Category.PSYCHOLOGY,
    Category.HISTORY,
    Category.SCIENCE,
    Category.CHILDRENACTION,
  ];

  constructor() {}

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}
