import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent, map } from 'rxjs';
import { debounceTime } from 'rxjs';

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

  searchInput$?: Observable<string>;

  constructor() {}

  ngOnInit(): void {
    this.currentTime$.subscribe((time) => console.log(time));

    this.searchInput$ = fromEvent(
      document.getElementById('searchInput')!,
      'input'
    ).pipe(
      debounceTime(500),
      map((event: Event) => (event.target as HTMLInputElement).value)
    );

    this.searchInput$.subscribe((value) => console.log(value));
  }
}
