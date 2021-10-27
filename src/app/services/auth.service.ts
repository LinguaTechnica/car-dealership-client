import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as config } from '../../environments/environment';
import { tap } from 'rxjs/operators';

export const authUrl = config.apiAuthUrl;
export interface User {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  private user: User;

  constructor(private http: HttpClient) { }

  // https://angular.io/guide/http#reading-the-full-response
  authenticate(credentials): Observable<any> {
    return this.http.post(authUrl, credentials, { observe: 'response'}).pipe(
      tap(res => {
        this.authenticated = true;
        this.user = { username: 'Fakey' };
        sessionStorage.setItem('userToken', res.headers.get('Authorization'));
      })
    );
  }

  isLoggedIn(): boolean {
    return this.authenticated;
  }

  logout(): void {
    sessionStorage.removeItem('userToken');
    this.authenticated = false;
  }

  getUser(): Observable<User> {
    return of(this.user);
  }
}
