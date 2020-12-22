import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IShoppinglist } from 'src/app/shared/interfaces';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  constructor(private httpClient: HttpClient) { }
  
  // post("/api/shoppinglists/update")
  updateShoppinglistItems(shoppinglistId: string, itemId: string): Observable<IShoppinglist> {
    return this.httpClient.post<IShoppinglist>(
      `${apiUrl}/api/shoppinglists/update`,
      { shoppinglistId, itemId },
      );
    }
    // post("/api/shoppinglists/create")
    createShoppinglist(data: any): Observable<IShoppinglist> {
      return this.httpClient.post<IShoppinglist>(
        `${apiUrl}/api/shoppinglists/create`,
        data,
        );
      }
      // get("/api/shoppinglists")
      loadUserShoppinglists(): Observable<IShoppinglist> {
        return this.httpClient.get<IShoppinglist>(
          `${apiUrl}/api/shoppinglists`
          );
      }
      // get("/api/shoppinglists/:id")
      loadShoppinglist(id: string): Observable<IShoppinglist> {
        return this.httpClient.get<IShoppinglist>(
          `${apiUrl}/api/shoppinglists/${id}`
          );
        }
      }
      