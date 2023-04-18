import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, map, take, takeUntil } from 'rxjs';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { CategoryService } from '../../services/category/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  isOpen: boolean = false;
  categories: string[];

  constructor(
    private sidebarService: SidebarService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.toggleSidebar();
    this.getCategories();
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((toggle) => (this.isOpen = toggle));
  }

  getCategories(): void {
    this.categoryService
      .getCategories()
      .pipe(
        take(1),
        map((categories: Category[]) =>
          categories.map((category: Category) => category.name)
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
