import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService, ShoppinglistService } from 'src/app/core/services';
import { IItem, IShoppinglist } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-shoppinglist-details',
  templateUrl: './shoppinglist-details.component.html',
  styleUrls: ['./shoppinglist-details.component.scss']
})
export class ShoppinglistDetailsComponent implements OnInit {

  shoppinglist: IShoppinglist = null;
  items: IItem[] = [];

  constructor(
    private shoppinglistService: ShoppinglistService, 
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    const shoppinglistId = this.activatedRoute.snapshot.params.id;

    shoppinglistService.loadShoppinglist(shoppinglistId).subscribe(shoppinglist => {
      this.shoppinglist = shoppinglist;
      if(!shoppinglist){
        return this.router.navigate(['/']);
      }
    });
    
  }

  ngOnInit(): void {
  }

  onItemAdded(item: IItem): void { 
    this.shoppinglist.items.push(item);
  }

}
