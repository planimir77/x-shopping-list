import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  // post("/api/items/create")
  createItem(data: any): Observable<IItem> {
    return this.httpClient.post<IItem>(
        `${apiUrl}/api/items/create`,
        data,
      );
  }
  // get("/api/items/:id")
  loadItem(id: string): Observable<IItem> {
    return this.httpClient.get<IItem>(
      `${apiUrl}/api/items/${id}`
      );
  }
}
