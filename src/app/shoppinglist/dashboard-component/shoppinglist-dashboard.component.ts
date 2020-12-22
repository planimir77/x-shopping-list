import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppinglistService } from 'src/app/core/services';
import { IShoppinglist } from 'src/app/shared/interfaces';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './shoppinglist-dashboard.component.html',
  styleUrls: ['./shoppinglist-dashboard.component.scss']
})
export class ShoppinglistDashboardComponent implements OnInit {

  @Output() menuClosed: EventEmitter<void>
  shoppinglists: IShoppinglist = null;
  @ViewChild(MatMenuTrigger) triggerBtn: MatMenuTrigger;
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
    if (event === this) {
      console.log('button clicked')
    }else if (this.triggerBtn.menuClosed.closed){
      this.router.navigate(['/shoppinglist', event]);
    }
  }

}
