import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  @Output() itemChange = new EventEmitter<string>();
  isInBasket: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isInBasket = this.item.subscribers.some(sub => sub === this.shoppinglist?._id);
  }
  addToBasket(itemId: string) {
    this.itemChange.emit(itemId);
  }
}
