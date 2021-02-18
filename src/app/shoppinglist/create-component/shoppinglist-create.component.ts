import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppinglistService } from '../../core/services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateWhitespace } from '../shoppinglist.validator'

@Component({
  selector: 'app-shoppinglist-create',
  templateUrl: './shoppinglist-create.component.html',
  styleUrls: ['./shoppinglist-create.component.scss']
})
export class ShoppinglistCreateComponent implements OnInit {

  public addShopFormGroup: FormGroup;
  isLoading = false;
  minLength = 3;
  maxLength = 20;

  constructor(
    private shoppinglistService: ShoppinglistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addShopFormGroup = new FormGroup({
      shoppinglistName: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
        ValidateWhitespace,
      ]),
    });

    this.addShopFormGroup
      .get('shoppinglistName')
      .valueChanges
      .subscribe((changes) => {
        if (changes.trimStart().length !== changes.length) {
          this.addShopFormGroup
            .patchValue({ 'shoppinglistName': changes.trimStart() });
        }

        if (changes.includes('  ')) {
          const newValue = changes.replace('  ', ' ');
          this.addShopFormGroup
            .patchValue({ 'shoppinglistName': newValue });
        }

        if (changes.length === 1 && changes !== changes.toUpperCase()) {
          this.addShopFormGroup
            .patchValue({ 'shoppinglistName': changes.toUpperCase() });
        }
      });
  }

  public checkError = (controlName: string, errorNames: string[]) => {
    for (const errorName of errorNames) {
      if (this.addShopFormGroup.controls[controlName].hasError(errorName)) {
        return true;
      }
    }
    return false;
  }

  onSubmit(): void {
    this.isLoading = true;

    this.shoppinglistService.createShoppinglist(this.addShopFormGroup.value.trimEnd())
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/shoppinglist/', response._id]);
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        }
      });
  }
}
