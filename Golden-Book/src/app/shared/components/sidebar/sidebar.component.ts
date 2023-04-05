import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../enums/category.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  isOpen: boolean = false;
  categories: Category[];

  constructor(
    private sidebarService: SidebarService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.sidebarService.toggleSidebar$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((toggle) => (this.isOpen = toggle));

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
