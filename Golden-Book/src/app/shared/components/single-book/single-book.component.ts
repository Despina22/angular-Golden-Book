import { Component, Input, OnInit } from '@angular/core';
import { Book } from './single-book.model';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss'],
})
export class SingleBookComponent implements OnInit {
  @Input() books: Book[];
  constructor() {}

  ngOnInit(): void {}
}
