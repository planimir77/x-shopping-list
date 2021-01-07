import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItem, IShoppinglist } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() shoppinglist: IShoppinglist;
  @Output() itemChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  itemChanged(value: string){
    this.itemChange.emit(value);
  }
}
