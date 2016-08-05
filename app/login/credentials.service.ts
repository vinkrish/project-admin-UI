import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CookieService }  from 'angular2-cookie/core';
import { Credentials }    from './credentials';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {
	private loggedIn = true;

  constructor(private http: Http) {
     //this.loggedIn = !!localStorage.getItem('auth_token');
   }

  login(credentials: Credentials) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/login', 
        JSON.stringify({ credentials }), 
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  checkCredentials(){
      if (localStorage.getItem("user") === null){
          console.log(localStorage.getItem("user"));
      }
   }
}