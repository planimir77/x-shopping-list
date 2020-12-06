import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShoppinglist } from '../interfaces/shoppinglist.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const shoppinglistUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  constructor(private httpClient: HttpClient) { }

  // post("/api/shoppinglist/create")
  createShoppinglist(data: any): Observable<IShoppinglist> {
    return this.httpClient.post<IShoppinglist>(
        `${shoppinglistUrl}/shoppinglist/create`,
        data,
        { withCredentials: true }
      );
  }
}
