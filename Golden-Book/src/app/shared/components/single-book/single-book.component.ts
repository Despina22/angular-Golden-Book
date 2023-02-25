import { Component, Input, OnInit } from '@angular/core';
import { SingleBook } from './single-book.model';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss'],
})
export class SingleBookComponent implements OnInit {
  @Input() book: SingleBook = {
    id: 1,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim dicta assumenda sapiente quam, dolorum eum ipsa voluptatem sed, consequatur eligendi perspiciatis, non soluta? Eum sequi, ab cupiditate omnis, animi doloremque amet modi natus rem, aperiam tempore laborum ipsa voluptatum?',
    category: 'Literary',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX375_BO1,204,203,200_.jpg',
    publishedDate: 1989,
  };
  constructor() {}

  ngOnInit(): void {}
}
