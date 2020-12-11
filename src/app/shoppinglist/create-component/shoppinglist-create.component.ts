import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppinglistService } from '../../core/services/shoppinglist.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-shoppinglist-create',
  templateUrl: './shoppinglist-create.component.html',
  styleUrls: ['./shoppinglist-create.component.scss']
})
export class ShoppinglistCreateComponent implements OnInit {

  title = 'Create Shopping List';

  public addShopFormGroup: FormGroup;
  isLoading = false;

  constructor(
    private shoppinglistService: ShoppinglistService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.addShopFormGroup = new FormGroup({
      shoppinglistName : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addShopFormGroup.controls[controlName].hasError(errorName);
  }

  onSubmit(): void {
    const input = this.addShopFormGroup.value

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

}
