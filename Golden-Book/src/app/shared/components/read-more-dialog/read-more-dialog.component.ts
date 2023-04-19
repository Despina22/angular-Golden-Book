import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/features/models/single-book.model';

@Component({
  selector: 'app-read-more-dialog',
  templateUrl: './read-more-dialog.component.html',
  styleUrls: ['./read-more-dialog.component.scss'],
})
export class ReadMoreDialogComponent implements OnInit {
  title: string = 'Book Description';

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialog.closeAll();
    console.log('Dialog closed');
  }
}
