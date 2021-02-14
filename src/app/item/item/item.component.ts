import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { ItemService, ShoppinglistService } from 'src/app/core/services';
import { IItem } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem;
  @Input() shoppinglistId: string;
  @Output() itemChange = new EventEmitter<IItem>();
  @Output() itemRemoved = new EventEmitter<string>();
  @ViewChild(MatMenuTrigger) triggerBtn: MatMenuTrigger;

  constructor(
    private shoppinglistService: ShoppinglistService,
    private itemService: ItemService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  subscribeToBasket(itemId: string) {
    if (this.isInBasket()) {
      this.itemService.unsubscribe(itemId, this.shoppinglistId).subscribe({
        next: (response) => {
          this.itemChange.emit(response);
        },
        error: (err) => {
          this.errorHandler(err);
        }
      });
    }else{
      this.itemService.subscribe(itemId, this.shoppinglistId).subscribe({
        next: (response) => {
          if(response){
            this.itemChange.emit(response);
          }
        },
        error: (err) => {
          this.errorHandler(err);
        }
      });
    }
  }

  itemRemove(): void{ 
    // Remove item
    this.shoppinglistService.removeShoppinglistItem(this.shoppinglistId, this.item._id)
    .subscribe({
      next: (response) => {
        if(response){
          this.itemRemoved.emit(this.item._id);
        }
      },
      error: (err) => {
        this.errorHandler(err);
      }
    });
  }

  isInBasket(): boolean {
    return this.item.subscribers.some(sub => sub === this.shoppinglistId);
  }

  openMatMenu() {
    this.triggerBtn.openMenu();
  }

  errorHandler(error: any):any{
    if (error.status === 401) {
      return this.router.navigateByUrl('/user/login');
    } else if (error.status === 0) {
      return alert('No internet connection');
    } else {
      return this.router.navigateByUrl('/error-page');
    }
  }
}
