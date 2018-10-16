import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = null;

  constructor(private http: Http) { 
    this.api = 'http://localhost:9009/api/';
  }

  hello_world() {
    return "Hello World! I am the an api BOT.";
  }

  login(userData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({"OpenId": userData.OpenId});
    return this.http.post(this.api + "Login", body, options).pipe(
      map((res: Response) => {
        return res; 
      }));
  }

  getProfile(id) {
    return this.http.get(this.api + "GetProfile/" + id).pipe(
      map((res: Response) => { 
        return res.json();
    }));
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
