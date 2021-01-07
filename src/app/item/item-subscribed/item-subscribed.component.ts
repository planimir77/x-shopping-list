import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item-subscribed',
  templateUrl: './item-subscribed.component.html',
  styleUrls: ['./item-subscribed.component.scss']
})
export class ItemSubscribedComponent implements OnInit {

  @Input() item: IItem;
  @Input() shoppinglistId: string;
  subscriber: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.subscriber = this.item.subscribers.some(sub => sub === this.shoppinglistId);
  }

}
