import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Country, SimCountriesWithCategory } from "../entity/Country";
import { SimPackages } from "../entity/Package";
import { UserDataLead, UserDataRegister } from "../entity/User";

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

	postDataCreateSaleLead(user: UserDataLead){
        const body = {
        	Email: user.Email,
        	FirstName: user.FirstName,
        	LastName: user.LastName,
        	Phone: user.Phone,
        	Message: user.Message,
        	Affiliate: user.Affiliate,
        };
        return this.http.post(this.baseUrl + "Leads/CreateSaleLead", body); 
    }

    postDataRegister(user: UserDataRegister){
        const body = {
            Email: user.Email,
            Password: user.Password,
            ConfirmPassword: user.ConfirmPassword,
            FirstName: user.FirstName,
            LastName: user.LastName,
            Phone: user.Phone,
            Prefix: user.Prefix,
            Affiliate: user.Affiliate,
            AllowSendMail: user.AllowSendMail,
        };
        return this.http.post(this.baseUrl + "Account/Register", body); 
    }


    postDataSimPackages(SimPackages: SimPackages){
        const body = {
            Countries: SimPackages.Countries,
            TotalDays: SimPackages.TotalDays,
        };
        return this.http.post(this.baseUrl + "Public/SimPackagesByCountries", body); 
    }

	
}
