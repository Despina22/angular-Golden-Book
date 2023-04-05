import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../../enums/category.enum';
import { CategoryService } from '../../services/category.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  categories: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .getCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories) => (this.categories = categories));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
