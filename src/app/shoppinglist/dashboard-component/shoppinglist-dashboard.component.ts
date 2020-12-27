import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppinglistService } from 'src/app/core/services';
import { IShoppinglist } from 'src/app/shared/interfaces';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './shoppinglist-dashboard.component.html',
  styleUrls: ['./shoppinglist-dashboard.component.scss']
})
export class ShoppinglistDashboardComponent implements OnInit {


  shoppinglists: IShoppinglist = null;
  isMenuOpen: boolean = false;
  cards = this.breakpointObserver.observe(['(min-width: 768.99px)']).pipe(
    map(({ matches }) => {
      if (matches) {
        return "1";
      }
      return "2";
    })
  );

  constructor(
    private shoppinglistService: ShoppinglistService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
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
    if (!this.isMenuOpen) {
      this.router.navigate(['/shoppinglist', event]);
    }
  }
  menuOpened() {
    this.isMenuOpen = true;
  }
  menuClosed() {
    this.isMenuOpen = false;
  }

  delete(shoppinglistId, index: string,) {
    this.shoppinglistService.deleteShoppinglist(shoppinglistId)
      .subscribe({
        next: (response) => {
          this.shoppinglists.splice(index, 1); 
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
