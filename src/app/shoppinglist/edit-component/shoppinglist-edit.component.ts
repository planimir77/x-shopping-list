import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id:string,
  name: string,
  index:number,
}

@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.scss']
})
export class ShoppinglistEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShoppinglistEditComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData,
    ) { }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
