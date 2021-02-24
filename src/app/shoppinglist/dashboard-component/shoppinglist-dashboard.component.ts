import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService, ShoppinglistService } from 'src/app/core/services';
import { InfoComponent } from 'src/app/shared/components/info/info.component';
import { IShoppinglist, IUser } from 'src/app/shared/interfaces';
import { ShoppinglistEditComponent } from '../edit-component/shoppinglist-edit.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './shoppinglist-dashboard.component.html',
  styleUrls: ['./shoppinglist-dashboard.component.scss']
})
export class ShoppinglistDashboardComponent implements OnInit {


  shoppinglists: IShoppinglist = null;
  isMenuOpen: boolean = false;
  isFavoriteClicked: boolean = false;
  currentUser: IUser;

  constructor(
    private shoppinglistService: ShoppinglistService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService,
  ) {
    shoppinglistService.loadUserShoppinglists().subscribe(shoppinglists => {
      this.shoppinglists = shoppinglists;
      if (!shoppinglists) {
        return this.router.navigate(['/shoppinglist/create']);
      }
    });

  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(currentUser =>
      this.currentUser = currentUser);
  }

  onClick(event: any): void {
    if (this.isMenuOpen || this.isFavoriteClicked) {
      return;
    }
    this.router.navigate(['/shoppinglist', event]);
  }

  onFavoriteClick(shoppinglistId: string, index: number, isFavorite: boolean): void {
    this.isFavoriteClicked = true;

    this.shoppinglistService.getFavoriteShoppinglist()
      .subscribe({
        next: (exFavorite) => {
          if (exFavorite) {
            this.shoppinglistService.shoppinglistNotFavorite(exFavorite._id)
              .subscribe({
                next: (response) => {
                  const exFavoriteIndex = this.getShoppinglistIndex(exFavorite._id);
                  this.shoppinglists[exFavoriteIndex] = { ...response };
                  if (exFavorite._id !== shoppinglistId) {
                    this.shoppinglistService.shoppinglistFavorite(shoppinglistId)
                      .subscribe({
                        next: (response) => {
                          this.shoppinglists[index] = response;
                        }
                      });
                  }
                }
              });

          } else {
            this.shoppinglistService.shoppinglistFavorite(shoppinglistId)
              .subscribe({
                next: (response) => {
                  this.shoppinglists[index] = { ...response };
                }
              });
          }
        },
        error: (err) => {
          console.log(err);
        }
      });

    setTimeout(() => {
      this.isFavoriteClicked = false;
    }, 1000);
  }

  getShoppinglistIndex(shoppinglistId: string): number {
    const shoppinglist = this.shoppinglists.find(shoppinglist => shoppinglist._id === shoppinglistId);
    return this.shoppinglists.indexOf(shoppinglist);
  }

  menuOpened() {
    this.isMenuOpen = true;
  }
  menuClosed() {
    this.isMenuOpen = false;
  }

  delete(shoppinglistId: string, index: string, shoppinglistName: string) {
    const dialogRef = this.dialog.open(InfoComponent, {
      panelClass: 'dialog-container-delete',
      width: '340px',
      data: {
        info: `Are you sure you want to delete the ${shoppinglistName} ?`,
        user: this.currentUser?.username,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.shoppinglistService
          .deleteShoppinglist(shoppinglistId)
          .subscribe({
            next: (response) => {
              if (response) {
                this.shoppinglists.splice(index, 1);
              }
            },
            error: (err) => {
              console.log(err);
            }
          });
      }
    })
  }

  edit(shoppinglistId: string, shoppinglistName: string, index: string) {
    const dialogRef = this.dialog.open(ShoppinglistEditComponent, {
      panelClass: 'dialog-container-edit',
      width: '340px',
      data: {
        id: shoppinglistId,
        name: shoppinglistName,
        index: index,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Call service
        this.shoppinglistService.updateShoppinglist(result.id, result.name.trim())
          .subscribe(response => {
            if (response) {
              this.shoppinglists[result.index].shoppinglistName = response.shoppinglistName;
            }
          });
      }
    });
  }
}
