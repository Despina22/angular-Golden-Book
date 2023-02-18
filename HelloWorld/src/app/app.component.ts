import { Product } from './models/product.model';
import { Address } from './models/address.model';
import { Customer } from './models/customer.model';
import { Employee } from './models/employee.model';
import { Component, OnInit } from '@angular/core';
import { Candidate } from './models/candidate.model';
import { User } from './models/base/user.model';
import { BaseEntity } from './models/base/baseEntity.model';
import { Post } from './models/base/post.model';
import { Book } from './models/base/book.model';
import { Job } from './models/base/job.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'My First app';

  user1 = new User(1, 'Mark', 'mark@gmail.com', '985-659-745');
  user2 = new User(2, 'Lea', 'lea@gmail.com', '985-659-852');
  user3 = new User(3, 'Mary', 'mary@gmail.com', '123-659-987');

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
  employee4 = new Employee(
    4,
    'Sam',
    'sam@gmail.com',
    '963-753-654',
    'Sales Manager'
  );
  employee5 = new Employee(5, 'Bob', 'bob@gmail.com', '456-753-321', 'Sales');

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
  customer4Address = new Address('Arden Quay', 18, 'Vancouver', 'Washington');
  customer4 = new Customer(
    4,
    'John',
    'john@gmail.com',
    '987-123-456',
    this.customer4Address
  );
  customer5Address = new Address('Anson Fairway', 22, 'Tacoma', 'Washington');
  customer5 = new Customer(
    5,
    'Sam',
    'sam@gmail.com',
    '987-654-654',
    this.customer5Address
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
  product6 = new Product(
    6,
    'Potatoes',
    1.99,
    'classically sweet and almost caramelized in flavor'
  );
  product7 = new Product(
    7,
    'Mashrooms',
    1.99,
    'classically sweet and almost caramelized in flavor'
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

    const baseEntity: BaseEntity = {
      id: 5,
      sayHello() {
        console.log('Hello from Base Entity');
      },
    };
    console.log(baseEntity);

    console.log(
      `Difference between classes and interface:
       Classes we use to define the structure of an object,
       and also provide the implementation of methods and properties.
       And interface we use only to define the structure of an object,
       and can not provide any implementation details.
       A class can have multiple instances, while an interface does not have any
       instances on its own.`
    );

    this.user3.sayHello();
    this.product7.sayHello();
    this.customer5.sayHello();
    this.employee5.sayHello();

    const post1: Post = {
      id: 1,
      title: 'Daily News',
      description: 'News from today',
      dateCreated: new Date(2022, 1, 16),
      numberOfLikes: 30,
    };
    const post2: Post = {
      id: 2,
      title: 'BBC News',
      description: 'News from today',
      dateCreated: new Date(2022, 1, 17),
      numberOfLikes: 120,
    };
    console.log('Post 1:', post1);
    console.log('Post 2:', post2);

    const book1: Book = {
      id: 1,
      title: 'Anna Karenina',
      description:
        'Anna is intelligent and literate, a reader of English novels and a writer of childrens books.She is elegant, always understated in her dress...',
      dateCreated: new Date(1878),
      author: 'Leo Tolstoy',
      numberOfStars: 5,
      category: 'Realist novel',
    };
    const book2: Book = {
      id: 2,
      title: 'Harry Potter',
      description:
        'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, ...',
      dateCreated: new Date(1997, 5, 26),
      author: 'J.K.Rowling',
      numberOfStars: 5,
      category: 'Fantasy',
    };
    console.log('Book 1:', book1);
    console.log('Book 2:', book2);

    const job1 = new Job(
      1,
      'Sales Manager',
      'A Sales Manager , or Sales Department Manager, is responsible for overseeing daily operations in the sales department. Their duties include hiring...',
      40,
      14
    );
    const job2 = new Job(
      2,
      'Architect',
      'Architect Job Responsibilities:Researches, programs, plans, designs, and administers building projects for clients, applying knowledge of architectural design, construction detailing, construction procedures',
      40,
      16
    );
    console.log('Job 1 Salary', job1.getSalary());
    console.log('Job 2 Salary', job2.getSalary());
  }

  printCandidates(candidates: Candidate[]): string {
    return candidates
      .map((candidate) => `${candidate.getFullName()}: ${candidate.birthday}`)
      .join('; ');
  }
}
