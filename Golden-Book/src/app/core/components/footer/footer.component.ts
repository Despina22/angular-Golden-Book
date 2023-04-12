import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  text: string = 'Orion Innovation - ANGULAR WORKSHOP 2022';

  constructor() {}
}
