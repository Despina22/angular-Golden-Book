import { Component, OnInit } from '@angular/core';
import { Candidate } from './models/candidate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'My First app';
  candidate1 = new Candidate('William', 'Jones', new Date(1988, 3, 15));
  candidate2 = new Candidate('Olivia', 'Perry', new Date(1996, 6, 22));

  ngOnInit(): void {
    console.log(this.candidate1, this.candidate2);
    const candidates: Candidate[] = [this.candidate1, this.candidate2];
    console.log(candidates);
  }
}
