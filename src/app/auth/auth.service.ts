import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators'
import { Observable, BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';
import { User } from './user';
import { AuthResponse } from './auth-response';
import { environment } from 'src/environments/environment';
import { UserConnection } from './user-connection';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";




@Injectable({
  providedIn: 'root',

})
export class AuthService {

  
  jwtHelper = new JwtHelperService();
  authState = new BehaviorSubject(false);


  constructor(private httpClient: HttpClient, 
              private readonly storage:Storage, 
              private router: Router

    ) {
   

  }

  // register(user: User): Observable<AuthResponse> {
  //   return this.httpClient.post<AuthResponse>(`${environment.AUTH_SERVER_ADRESS}/register`, user).pipe(
  //     tap(async (res: AuthResponse) => {
  //       if (res.user) {
  //         await this.storage.set("ACCESS_TOKEN", res.user.access_token);
  //         await this.storage.set("EXPIRES_IN", res.user.expires_in);
  //         this.authSubject.next(true);
  //       }
  //     })

  //   );
  // }

  // async logout() {
  //   await this.storage.remove("ACCESS_TOKEN");
  //   await this.storage.remove("EXPIRES_IN");
  //   this.authSubject.next(false);
  // }

  // isLoggedIn() {
  //   return this.authSubject.asObservable();
  // }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.register_uri}`, user);
  }

  makeLogin(username, password) {
    let options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    this.httpClient
    .post(`${environment.AUTH_SERVER_ADRESS}/api/login`, body.toString(), options)
    .pipe(map((response: any) => {
      console.log(response); // affichage
      this.storage.set('access_token', response.access_token);
      let decodedUser = this.jwtHelper.decodeToken(response.access_token); // affichage en console
      this.authState.next(decodedUser); // affichage
      this.authState.next(true);
      console.log(decodedUser); // affichage
      return true;
    }))
    .subscribe(response => {
        console.log(response)
        this.router.navigate(['/home']);
    });

  }

  isAuthenticated() {
    return this.authState.value;
  }
  
 
  



}


