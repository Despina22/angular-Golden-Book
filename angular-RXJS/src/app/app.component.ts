import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  combineLatest,
  debounceTime,
  forkJoin,
  fromEvent,
  interval,
  map,
} from 'rxjs';
import { AppService } from './app-service.service';
import { User } from './models/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular-RXJS';
  timerValue: number = 0;

  currentTime$: Observable<Date> = new Observable<Date>((observer) => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });

  searchInput$?: Observable<string>;

  input1$?: Observable<Event>;
  input2$?: Observable<Event>;
  result$?: Observable<[string, string]>;

  data1$?: Observable<any>;
  data2$?: Observable<any>;

  input3$?: Observable<number>;
  input4$?: Observable<number>;
  sum$?: Observable<number>;

  data3$?: Observable<User>;

  timerSubscription?: Subscription;

  constructor(private appService: AppService) {}

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

    this.data1$ = this.appService.getData1();
    this.data2$ = this.appService.getData2();

    forkJoin([this.data1$, this.data2$]).subscribe((results) =>
      console.log('Combined results:', results)
    );

    this.input3$ = fromEvent(document.getElementById('input3')!, 'keyup').pipe(
      map((event) => +(event.target as HTMLInputElement).value)
    );
    this.input4$ = fromEvent(document.getElementById('input4')!, 'keyup').pipe(
      map((event) => +(event.target as HTMLInputElement).value)
    );

    this.sum$ = combineLatest([this.input3$, this.input4$]).pipe(
      map(([input3, input4]) => input3 + input4)
    );
    this.sum$.subscribe((sum) => console.log(sum));

    this.data3$ = this.appService.getData1();
    this.data3$.subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  startTimer(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.timerValue++;
    });
  }

  stopTimer() {
    this.timerSubscription?.unsubscribe();
    this.timerValue = 0;
  }
}
