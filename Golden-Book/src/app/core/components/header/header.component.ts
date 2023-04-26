import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toggle: boolean = false;
  constructor(private sidebarService: SidebarService, private router: Router) {}

  toggleSidebar() {
    this.toggle = !this.toggle;
    this.sidebarService.toggleSidebar$.next(this.toggle);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
