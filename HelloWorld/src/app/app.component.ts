import { Customer } from './models/customer.model';
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

  customer1 = new Customer(
    1,
    'Joe',
    'joe456@gmail.com',
    '120 - 466 - 652',
    'Redmond, WA 78214'
  );
  customer2 = new Customer(
    1,
    'John',
    'john456@gmail.com',
    '120 - 255 - 352',
    'Redmond, WA 78214'
  );

  ngOnInit(): void {
    console.log(this.candidate1, this.candidate2);

    const candidates: Candidate[] = [this.candidate1, this.candidate2];
    console.log(candidates);

    const printCandidates = this.printCandidates(candidates);
    console.log(printCandidates);

    console.log('Employee 1:', this.employee1);
    console.log('Employee 2:', this.employee2);

    this.customer2.getName();
  }

  printCandidates(candidates: Candidate[]): string {
    return candidates
      .map((candidate) => `${candidate.getFullName()}: ${candidate.birthday}`)
      .join('; ');
  }
}
