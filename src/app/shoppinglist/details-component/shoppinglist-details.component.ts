import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService, ShoppinglistService } from 'src/app/core/services';
import { IItem, IShoppinglist } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-shoppinglist-details',
  templateUrl: './shoppinglist-details.component.html',
  styleUrls: ['./shoppinglist-details.component.scss']
})
export class ShoppinglistDetailsComponent implements OnInit {

  @Input() shoppinglist: IShoppinglist = null;

  constructor(
    private shoppinglistService: ShoppinglistService,
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.update();
  }
  update(): void {
    const shoppinglistId = this.activatedRoute.snapshot.params.id;

    this.shoppinglistService.loadShoppinglist(shoppinglistId)
      .subscribe(
        shoppinglist => {
          this.shoppinglist = shoppinglist;
          if (!shoppinglist) {
            return this.router.navigate(['/']);
          }
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

  onItemAdded(item: IItem): void {
    this.update();
  }

  itemChanged(itemId: string): void {
    const index = this.shoppinglist.items.findIndex(item => item._id === itemId);
    this.itemService.subscribe(itemId, this.shoppinglist._id).subscribe({
      next: (response) => {
        this.shoppinglist.items[index] = response;
      },
      error: (err) => {
        //this.isLoading = false;
        console.log(err);
        if (err.status === 401) {
          this.router.navigateByUrl('/user/login');
        }else if(err.status === 0){ 
          alert('No internet connection');
        } else {
          this.router.navigateByUrl('/error-page');
        }
      }
    })
  }
}
