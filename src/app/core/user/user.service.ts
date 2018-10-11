import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import * as jwt_decode from 'jwt-decode';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

  subject = new BehaviorSubject<User>(null);
  userName: string;

  constructor(private tokenService: TokenService) {
    if (this.tokenService.getToken()) {
      this.decodeAndNotify();
    }
  }

  getUser(): Observable<User> {
    return this.subject.asObservable();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  logout() {
    this.tokenService.removeToken();
    this.subject.next(null);
  }

  decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    const user: User = jwt_decode(token) as User;
    this.userName = user.name;
    this.subject.next(user);
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }

  getUserName(): string {
    return this.userName;
  }

}