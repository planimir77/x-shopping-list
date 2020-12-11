import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppinglistService } from 'src/app/core/services';
import { IShoppinglist } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-shoppinglist-details',
  templateUrl: './shoppinglist-details.component.html',
  styleUrls: ['./shoppinglist-details.component.scss']
})
export class ShoppinglistDetailsComponent implements OnInit {

  shoppinglist: IShoppinglist = null;

  constructor(shoppinglistService: ShoppinglistService, activatedRoute: ActivatedRoute) {
    const id = activatedRoute.snapshot.params.id;
    shoppinglistService.loadShoppinglist(id).subscribe(shoppinglist => {
      console.log(shoppinglist);
      this.shoppinglist = shoppinglist;
    });
  }

  ngOnInit(): void {
  }

}
