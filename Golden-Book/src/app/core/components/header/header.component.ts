import { Component } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toggle: boolean = false;
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.toggle = !this.toggle;
    this.sidebarService.toggleSidebar$.next(this.toggle);
  }
}
