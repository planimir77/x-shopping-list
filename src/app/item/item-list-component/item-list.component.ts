import { Component, Input, OnInit } from '@angular/core';
import { IShoppinglist } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() shoppinglist: IShoppinglist;

  constructor() { }

  ngOnInit(): void {
  }

}
