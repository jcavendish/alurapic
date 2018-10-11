import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private userToken: UserService) {}

  authenticate(userName: string, password: string): Observable<Object> {
   return this.http.post(
     `${API}user/login`, 
     { userName, password },
     { observe: 'response' }
    )
    .pipe(tap(res => {
      const authToken = res['headers'].get('x-access-token');
      this.userToken.setToken(authToken);
    }));
  }

}
