import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchValue: string;

  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  search() {
    this.searchEvent.emit(this.searchValue);
  }
}
