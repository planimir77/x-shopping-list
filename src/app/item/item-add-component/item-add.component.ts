import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../core/services';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  @Input() shoppinglistId: string;
  public addFormGroup: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addFormGroup = new FormGroup({
      itemName : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    if (this.addFormGroup.touched) {
      
      return this.addFormGroup.controls[controlName].hasError(errorName);
    }
  }

  get itemName() { return this.addFormGroup.get('itemName') };

  onSubmit(): void {
    const {itemName} = this.addFormGroup.value

    this.isLoading = true;
    
    this.itemService.createItem(itemName, this.shoppinglistId)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.addFormGroup.reset();
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        }
      });
  }
}
