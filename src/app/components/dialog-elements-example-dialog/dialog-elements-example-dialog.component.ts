import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.component.html',
  styleUrl: './dialog-elements-example-dialog.component.scss',
})
export class DialogElementsExampleDialogComponent {
  totalAnswers: number;

  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.totalAnswers = data.totalAnswers;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
