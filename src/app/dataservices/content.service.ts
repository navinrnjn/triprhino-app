import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  api = null;

  constructor(private http: Http) { 
    this.api = 'http://localhost:9009/api/app/';
  }

  addPlace(place) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(place);
    return this.http.post(this.api + "AddPlace", body, options).pipe(
      map((res: Response) => {
        return res;
      }));
  }

}
