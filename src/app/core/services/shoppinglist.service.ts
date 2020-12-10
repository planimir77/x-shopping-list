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

  // post("/api/shoppinglists/create")
  createShoppinglist(data: any): Observable<IShoppinglist> {
    return this.httpClient.post<IShoppinglist>(
        `${apiUrl}/api/shoppinglists/create`,
        data,
        { withCredentials: true }
      );
  }
}
