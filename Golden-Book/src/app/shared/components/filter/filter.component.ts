import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take } from 'rxjs';
import { CategoryService } from '../../services/category/category.service';

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
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService
      .getCategories()
      .pipe(take(1))
      .subscribe((categories: string[]) => {
        this.categories = categories;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
