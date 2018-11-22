import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {observable} from 'rxjs';
import {map} from 'rxjs/operators';

const apiUrl = "http://trapi.pythonanywhere.com/api/Login";
const logRegApiUrl = "http://trapi.pythonanywhere.com/api/app/Register";
@Injectable()
export class AuthApiService {

  constructor(public http: Http) { 
    
  }
  postUserData(credentials){
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("content-type", "application/json");
      this.http.post(apiUrl, JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
           resolve(res.json());
           alert("Data submitted");
       }, (err) => {
       reject(err);
      }); 
    });
  }
  login(username: string, password: string) {
    return this.http.post(logRegApiUrl, { username, password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}
