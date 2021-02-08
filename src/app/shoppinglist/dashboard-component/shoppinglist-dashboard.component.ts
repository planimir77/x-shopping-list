import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppinglistService } from 'src/app/core/services';
import { IShoppinglist } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './shoppinglist-dashboard.component.html',
  styleUrls: ['./shoppinglist-dashboard.component.scss']
})
export class ShoppinglistDashboardComponent implements OnInit {


  shoppinglists: IShoppinglist = null;
  isMenuOpen: boolean = false;
  isFavoriteClicked: boolean = false;

  constructor(
    private shoppinglistService: ShoppinglistService,
    private router: Router,
  ) {
    shoppinglistService.loadUserShoppinglists().subscribe(shoppinglists => {
      this.shoppinglists = shoppinglists;
      if (!shoppinglists) {
        return this.router.navigate(['/shoppinglist/create']);
      }
    });

  }

  ngOnInit(): void {
  }

  onClick(event: any): void {
    if (this.isMenuOpen || this.isFavoriteClicked) {
      return;
    }
    this.router.navigate(['/shoppinglist', event]);
  }

  onFavoriteClick(id: string): void { 
    this.isFavoriteClicked = true;
    setTimeout(() => {
      this.isFavoriteClicked = false;
    }, 1000);
  }
  menuOpened() {
    this.isMenuOpen = true;
  }
  menuClosed() {
    this.isMenuOpen = false;
  }

  delete(shoppinglistId: string, index: string,) {
    this.shoppinglistService.deleteShoppinglist(shoppinglistId)
      .subscribe({
        next: (response) => {
          if(response){
            this.shoppinglists.splice(index, 1);
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
