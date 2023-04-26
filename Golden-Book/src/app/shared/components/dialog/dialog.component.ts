import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from 'src/app/features/models/single-book.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      description: Book;
      title: string;
      oneButton: boolean;
      buttonText?: string;
    }
  ) {}

  close() {
    this.dialogRef.close('Dialog closed');
    console.log('Dialog closed');
  }

  closeYes() {
    this.dialogRef.close(true);
  }

  closeNo() {
    this.dialogRef.close(false);
  }
}
