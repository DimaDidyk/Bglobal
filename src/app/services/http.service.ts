import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Country, SimCountriesWithCategory } from "../entity/Country";
import { UserDataLead } from "../entity/User";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
};

@Injectable()
export class HttpService {

	baseUrl: string = "https://api.bglobal.global/api/";

	constructor(private http: HttpClient) {}

	getCountries() : Observable<Country[]> {
		return this.http.get<Country[]>(this.baseUrl + "Public/SimCountries", httpOptions);
	}

	getSimCountriesWithCategory() : Observable<SimCountriesWithCategory[]> {
		return this.http.get<SimCountriesWithCategory[]>(this.baseUrl + "Public/SimCountriesWithCategory", httpOptions);
	}

	postData(user: UserDataLead){
        const body = {
        	Email: user.Email,
        	FirstName: user.FirstName,
        	LastName: user.LastName,
        	Phone: user.Phone,
        	Message: user.Message,
        	Affiliate: user.Affiliate,
        	UserName: user.UserName,
        };
        return this.http.post(this.baseUrl + "Leads/CreateSaleLead", body); 
    }

	
}
