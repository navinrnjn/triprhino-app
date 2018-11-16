import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class AccommodationService {

    api = null;

    constructor(private http: Http) {
        //this.api = 'https://trapi.pythonanywhere.com/api/app/';
        this.api = 'http://localhost:9009/api/app/';
    }

    getAccommodationTypes() {
        return this.http.get(this.api + "GetAccommodationTypes").pipe(
            map((res: Response) => { 
              return res.json();
          }));
    }
}