import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() items: IItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
