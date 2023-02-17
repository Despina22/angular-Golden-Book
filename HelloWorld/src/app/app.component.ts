import { Product } from './models/product.model';
import { Address } from './models/address.model';
import { Customer } from './models/customer.model';
import { Employee } from './models/employee.model';
import { Component, OnInit } from '@angular/core';
import { Candidate } from './models/candidate.model';
import { User } from './models/base/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'My First app';

  user1 = new User(1, 'Mark', 'mark@gmail.com', '985-659-745');

  candidate1 = new Candidate('William', 'Jones', new Date(1988, 3, 15));
  candidate2 = new Candidate('Olivia', 'Perry', new Date(1996, 6, 22));

  employee1 = new Employee(
    1,
    'David',
    'david123@gmail.com',
    '123 - 654 - 789',
    'Architect'
  );
  employee2 = new Employee(
    2,
    'Max',
    'max456@gmail.com',
    '321 - 654 - 789',
    'Attorney'
  );
  employee3 = new Employee(3, 'Jane', 'jane@gmail.com', '963-852-654', 'Sales');

  customer1Address = new Address('Anson Fairway', 16, 'Tacoma', 'Washington');
  customer1 = new Customer(
    1,
    'Joe',
    'joe456@gmail.com',
    '120 - 466 - 652',
    this.customer1Address
  );

  customer2Address = new Address('Arden Quay', 12, 'Vancouver', 'Washington');
  customer2 = new Customer(
    2,
    'John',
    'john456@gmail.com',
    '120 - 255 - 352',
    this.customer2Address
  );

  customer3Address = new Address('Arden Quay', 14, 'Vancouver', 'Washington');
  customer3 = new Customer(
    3,
    'Jonas',
    'jonas@gmail.com',
    '654-852-746',
    this.customer3Address
  );

  product1 = new Product(
    1,
    'Apples',
    2.99,
    'Mild, aromatic, classically sweet and almost caramelized in flavor'
  );
  product2 = new Product(
    2,
    'Tomatoes',
    1.99,
    'Mild, aromatic, classically sweet and almost caramelized in flavor'
  );
  product3 = new Product(
    3,
    'Black Tea',
    3.99,
    'Mild, aromatic, classically sweet and almost caramelized in flavor'
  );
  product4 = new Product(
    4,
    'Pasta',
    2.99,
    'Mild, aromatic, classically sweet and almost caramelized in flavor'
  );
  product5 = new Product(
    5,
    'Sugar',
    1.99,
    'Mild, aromatic, classically sweet and almost caramelized in flavor'
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

    console.log('Product 1:', this.product1);
    console.log('Product 2:', this.product2);
    console.log('Product 3:', this.product3);
    console.log('Product 4:', this.product4);
    console.log('Product 5:', this.product5);
  }

  printCandidates(candidates: Candidate[]): string {
    return candidates
      .map((candidate) => `${candidate.getFullName()}: ${candidate.birthday}`)
      .join('; ');
  }
}
