import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Country} from "../entity/Country";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
};

@Injectable()
export class HttpService {

  baseUrl: string = "https://api.bglobal.global/api/";

  constructor(private http: HttpClient) {

  }

  getCountries() : Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl + "Public/SimCountries", httpOptions);
  }
}
