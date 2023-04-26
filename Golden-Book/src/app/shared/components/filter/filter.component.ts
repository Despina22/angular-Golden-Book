import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, take } from 'rxjs';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() selectedCategories = new EventEmitter<string[]>();

  categories: string[];
  defaultValue: string[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getDefaultValue();
  }

  getCategories(): void {
    this.categoryService
      .getCategories()
      .pipe(take(1))
      .subscribe((categories: string[]) => {
        this.categories = categories;
      });
  }

  getDefaultValue() {
    const filters = localStorage.getItem('filters');

    if (filters) {
      this.defaultValue = JSON.parse(filters).categoryName;
    }
  }

  onChange(event: string[]) {
    this.selectedCategories.emit(event);
  }
}
