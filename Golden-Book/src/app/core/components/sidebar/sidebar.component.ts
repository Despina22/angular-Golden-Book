import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { CategoryService } from '../../../shared/services/category/category.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';

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
