import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  // post("/api/item/create")
  createItem(itemName: string, shoppinglistId: string ): Observable<IItem> {
    return this.httpClient.post<IItem>(
        `${apiUrl}/api/item/create`,
        {itemName, shoppinglistId},
      );
  }
  // get("/api/item/:itemId&shoppinglistId")
  loadItem(_id: string, shoppinglistId: string): Observable<IItem> {
    return this.httpClient.get<IItem>(
      `${apiUrl}/api/item/${_id}&${shoppinglistId}`
      );
  }
  // get("/api/item/:itemId&shoppinglistId")
  loadItemByName(itemName: string, shoppinglistId: string): Observable<IItem> {
    return this.httpClient.get<IItem>(
      `${apiUrl}/api/item/by-name/${itemName}&${shoppinglistId}`
      );
  }
}
