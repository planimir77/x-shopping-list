import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IShoppinglist } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item-subscribed-list',
  templateUrl: './item-subscribed-list.component.html',
  styleUrls: ['./item-subscribed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default   
})
export class ItemSubscribedListComponent implements OnInit {

  @Input() shoppinglist: IShoppinglist;

  constructor() { }

  ngOnInit(): void {
  }

}
