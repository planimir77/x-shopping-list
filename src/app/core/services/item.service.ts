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
  createItem(itemName: string, shoppinglistId: string): Observable<IItem> {
    return this.httpClient.post<IItem>(
      `${apiUrl}/api/item/create`,
      { itemName, shoppinglistId },
    );
  }
  // post("/api/item/add")
  addItemSubscribers(itemId: string, shoppinglistId: string) {
    return this.httpClient.post<IItem>(
      `${apiUrl}/api/item/add`,
      { itemId, shoppinglistId },
    );
  }
  // post("/api/item/remove")
  removeItemSubscribers(itemId: string, shoppinglistId: string) {
    return this.httpClient.post<IItem>(
      `${apiUrl}/api/item/remove`,
      { itemId, shoppinglistId },
    );
  }
  // get("/api/item/:itemId&shoppinglistId")
  loadItem(_id: string): Observable<IItem> {
    return this.httpClient.get<IItem>(
      `${apiUrl}/api/item/${_id}`
    );
  }
  // get("/api/item/:itemId&shoppinglistId")
  loadItemByName(itemName: string): Observable<IItem> {
    return this.httpClient.get<IItem>(
      `${apiUrl}/api/item/by-name/${itemName}`
    );
  }
}
