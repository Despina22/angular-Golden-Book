import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { CategoryService } from '../../../shared/services/category/category.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  categories: string[];
  isUserAdmin: boolean = false;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private sidebarService: SidebarService,
    private categoryService: CategoryService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.toggleSidebar();
    this.getCategories();
    this.userRole();
  }

  userRole() {
    this.isUserAdmin = this.authService.isUserAdmin();
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
