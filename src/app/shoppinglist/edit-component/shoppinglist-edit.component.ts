import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidateWhitespace } from '../shoppinglist.validator';

export interface DialogData {
  id: string,
  name: string,
  index: number,
}

@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.scss']
})
export class ShoppinglistEditComponent implements OnInit {

  public formGroup: FormGroup;
  minLength = 3;
  maxLength = 20;

  constructor(
    public dialogRef: MatDialogRef<ShoppinglistEditComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      shoppinglistName: new FormControl(this.data.name, [
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
        ValidateWhitespace,
      ]),
    });

    this.formGroup
    .get('shoppinglistName')
    .valueChanges
    .subscribe((changes) => {
      if (changes.trimStart().length !== changes.length) {
        this.formGroup
          .patchValue({ 'shoppinglistName': changes.trimStart() });
      }

      if (changes.includes('  ')) {
        const newValue = changes.replace('  ', ' ');
        this.formGroup
          .patchValue({ 'shoppinglistName': newValue });
      }

      if (changes.length === 1 && changes !== changes.toUpperCase()) {
        this.formGroup
          .patchValue({ 'shoppinglistName': changes.toUpperCase() });
      }
    });
  }

  public checkError = (controlName: string, errorNames: string[]) => {
    for (const errorName of errorNames) {
      if (this.formGroup.controls[controlName].hasError(errorName)) {
        return true;
      }
    }
    return false;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
