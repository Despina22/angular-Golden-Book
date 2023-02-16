import { Candidate } from './models/candidate.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'My First app';
  candidate1 = new Candidate('William', 'Jones', '15-04-1988');
  candidate2 = new Candidate('Olivia', 'Perry', '22-07-1996');

  ngOnInit(): void {
    console.log(this.candidate1, this.candidate2);
  }
}
