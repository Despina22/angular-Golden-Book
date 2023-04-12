import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, map, take } from 'rxjs';
import { CategoryService } from '../../services/category/category.service';
import { CategoryData } from './../../models/category.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  categories: string[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .getCategories()
      .pipe(
        take(1),
        map((categories: CategoryData[]) =>
          categories.map((category: CategoryData) => category.name)
        )
      )
      .subscribe((categories: string[]) => {
        this.categories = categories;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
