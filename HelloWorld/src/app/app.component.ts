import { Employee } from './models/employee.model';
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

  employee1 = new Employee(
    1,
    'David',
    'david123@gmail.com',
    123 - 654 - 789,
    'Architect'
  );
  employee2 = new Employee(
    2,
    'Max',
    'max456@gmail.com',
    321 - 654 - 789,
    'Attorney'
  );

  ngOnInit(): void {
    console.log(this.candidate1, this.candidate2);

    const candidates: Candidate[] = [this.candidate1, this.candidate2];
    console.log(candidates);

    const printCandidates = this.printCandidates(candidates);
    console.log(printCandidates);

    console.log('Employee 1:', this.employee1);
    console.log('Employee 2:', this.employee2);
  }

  printCandidates(candidates: Candidate[]): string {
    return candidates
      .map((candidate) => `${candidate.getFullName()}: ${candidate.birthday}`)
      .join('; ');
  }
}
