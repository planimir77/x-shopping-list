import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppinglistService } from 'src/app/core/services';
import { IItem, IShoppinglist } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-shoppinglist-details',
  templateUrl: './shoppinglist-details.component.html',
  styleUrls: ['./shoppinglist-details.component.scss']
})
export class ShoppinglistDetailsComponent implements OnInit {

  @Input() shoppinglist: IShoppinglist = null;
  @Input() items: IItem[] = null;
  @ViewChild('tabGroup') tabGroup;
  isDone: boolean = false;
  subscribedItems: boolean;

  constructor(
    private shoppinglistService: ShoppinglistService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.update();
  }
  update(): void {
    const shoppinglistId = this.activatedRoute.snapshot.params.id;

    this.shoppinglistService.loadShoppinglist(shoppinglistId)
      .subscribe(
        shoppinglist => {
          this.items = shoppinglist.items;
          this.shoppinglist = shoppinglist;
          if (!shoppinglist) {
            return this.router.navigate(['/']);
          }

          this.setTitle(this.shoppinglist.shoppinglistName);
        },
        err => {
          if (err.status === 401) {
            this.router.navigateByUrl('/user/login');
          } else {
            this.router.navigateByUrl('/error-page');
          }
        }
      );
  }

  /**
   * Set the title according to the current shoppinglist name
   * @param shoppinglistName 
   */
  setTitle(shoppinglistName: string): void {
    const currentTitle = this.titleService.getTitle();
    this.titleService.setTitle(currentTitle.replace('XShoppingList', shoppinglistName));
  }

  onItemAdded(item: IItem): void {
    this.items.push(item);
  }

  onItemChanged(newItem: any): void {
    const index = this.getItemIndex(newItem._id);

    this.items.splice(index, 1, newItem);

    this.setSubscribedItems();
    this.setIsDone();
  }

  itemRemove(itemId: string): void {
    debugger;
    const index = this.getItemIndex(itemId);

    this.items.splice(index, 1);
  }

  getItemIndex(itemId: string): number {
    const item = this.items.find(item => item._id === itemId);
    return this.items.indexOf(item);
  }

  setIsDone(): void {
    const secondTabSelected = this.tabGroup.selectedIndex === 1;

    this.isDone = secondTabSelected && !(this.subscribedItems);
  }

  onTabGroupClicked(): void {
    this.setSubscribedItems();
    if (this.tabGroup.selectedIndex === 0) {
      setTimeout(() => this.isDone = false, 500);
    }
  }

  setSubscribedItems(): void {
    this.subscribedItems = this.items?.some(item => item.subscribers.includes(this.shoppinglist._id));
  }
}
