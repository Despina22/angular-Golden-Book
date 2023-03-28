import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, combineLatest, fromEvent, map } from 'rxjs';
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

  input1$?: Observable<Event>;
  input2$?: Observable<Event>;
  result$?: Observable<[string, string]>;

  constructor() {}

  ngOnInit(): void {
    this.currentTime$.subscribe((time) => console.log(time));

    this.searchInput$ = fromEvent(
      document.getElementById('searchInput')!,
      'keyup'
    ).pipe(
      debounceTime(500),
      map((event: Event) => (event.target as HTMLInputElement).value)
    );

    this.searchInput$.subscribe((value) => console.log(value));

    this.input1$ = fromEvent(document.getElementById('input1')!, 'input');
    this.input2$ = fromEvent(document.getElementById('input2')!, 'input');
    this.result$ = combineLatest([this.input1$, this.input2$]).pipe(
      map(([input1, input2]) => [
        (input1.target as HTMLInputElement).value,
        (input2.target as HTMLInputElement).value,
      ])
    );

    this.result$.subscribe((value) => console.log(value));
  }
}
