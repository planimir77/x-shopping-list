import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from 'src/app/core/services';
import { IItem, IShoppinglist } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem;
  @Input() shoppinglist: IShoppinglist;
  isInBasket: boolean = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.isInBasket = this.item.subscribers.some(sub => sub === this.shoppinglist?._id);
  }

  addToBasket(itemId: string) {
    this.itemService.loadItem(itemId).subscribe(item => {
      const subscriberId = item.subscribers.find(sub => sub === this.shoppinglist?._id);
      if (subscriberId) {
        this.itemService.removeItemSubscribers(itemId, subscriberId).subscribe({
          next: (response) => {
            this.item.subscribers.splice(this.item.subscribers.indexOf(subscriberId), 1);
            this.isInBasket = false;
          },
          error: (err) => {
            //this.isLoading = false;
            console.log(err);
          }
        })
      } else {
        this.itemService.addItemSubscribers(itemId, this.shoppinglist._id).subscribe({
          next: (response) => {
            this.item.subscribers.push(this.shoppinglist._id);
            this.isInBasket = true;
          },
          error: (err) => {
            //this.isLoading = false;
            console.log(err);
          }
        })
      }
    });
  }


}
