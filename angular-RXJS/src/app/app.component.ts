import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular-RXJS';

  currentTime$: Observable<Date> = new Observable<Date>((observer) => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });

  constructor() {}

  ngOnInit(): void {
    this.currentTime$.subscribe((time) => console.log(time));
  }
}
