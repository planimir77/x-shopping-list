import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, map } from 'rxjs/operators';
import { IUser } from '../../shared/interfaces';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class AuthService {

  private _currentUser: BehaviorSubject<IUser | null> = new BehaviorSubject(undefined);
  currentUser$ = this._currentUser.asObservable();
  isLogged$ = this.currentUser$.pipe(map(user => !!user));
  isReady$ = this.currentUser$.pipe(map(user => user !== undefined));

  constructor(private http: HttpClient) { }

  updateCurrentUser(user: IUser | null): void {
    this._currentUser.next(user);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/users/login`, data).pipe(
      tap((user: IUser) => this._currentUser.next(user))
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/users/register`, data).pipe(
      tap((user: IUser) => this._currentUser.next(user))
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${apiUrl}/api/users/logout`, {}).pipe(
      tap((user: IUser) => this._currentUser.next(null))
    );
  }

  authenticate(): Observable<any> {
    return this.http.get(`${apiUrl}/api/users/profile`).pipe(
      tap((user: IUser) => this._currentUser.next(user)),
      catchError(() => {
        this._currentUser.next(null);
        return [null];
      })
    );
  }
}
