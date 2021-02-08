import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppinglistService } from '../../core/services';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-shoppinglist-create',
  templateUrl: './shoppinglist-create.component.html',
  styleUrls: ['./shoppinglist-create.component.scss']
})
export class ShoppinglistCreateComponent implements OnInit {

  public addShopFormGroup: FormGroup;
  isLoading = false;

  constructor(
    private shoppinglistService: ShoppinglistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addShopFormGroup = new FormGroup({
      shoppinglistName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        this.whitespaceValidator,
      ]),
    });
  }

  public whitespaceValidator(control: FormControl): ValidationErrors {
    let isValid = null;
    if (
      control.value.length < 3 ||
      (control.value.trim().length === control.value.length)) {
      return;
    } else {
      const isWhitespace = control.value.trim().length === 0;
      isValid = !isWhitespace;
      isValid = control.value.trim().length >= 3;

    }
    return isValid ? null : { 'whitespace': true };
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addShopFormGroup.controls[controlName].hasError(errorName);
  }

  onSubmit(): void {
    debugger;
    const input = this.capitalize(this.addShopFormGroup.value);

    this.isLoading = true;

    this.shoppinglistService.createShoppinglist(input)
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
  capitalize(obj: any): any {
    //obj.shoppinglistName = obj.shoppinglistName[0].toUpperCase() + obj.shoppinglistName.substr(1);
    const shoppinglistName = obj.shoppinglistName.trim();
    const firstLetter = shoppinglistName[0];
    obj.shoppinglistName = shoppinglistName.replace(firstLetter, firstLetter.toUpperCase());
    return obj;
  }

}
