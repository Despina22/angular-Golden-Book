import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss'],
})
export class BookOverviewComponent implements OnInit {
  bookId: string;
  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.bookId = this.activatedRouter.snapshot.paramMap.get('bookId');
    console.log(this.bookId);
  }
}
