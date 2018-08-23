import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Country, SimCountriesWithCategory, ClosestPickUpPoints } from "../entity/Country";
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

	postDataCreateSaleLead(userDataLead: UserDataLead){
        const body = {
        	Email: userDataLead.Email,
        	FirstName: userDataLead.FirstName,
        	LastName: userDataLead.LastName,
        	Phone: userDataLead.Phone,
        	Message: userDataLead.Message,
        	Affiliate: userDataLead.Affiliate,
        };
        return this.http.post(this.baseUrl + "Leads/CreateSaleLead", body); 
    }

    postDataRegister(userDataRegister: UserDataRegister){
        const body = {
            Email: userDataRegister.Email,
            Password: userDataRegister.Password,
            ConfirmPassword: userDataRegister.ConfirmPassword,
            FirstName: userDataRegister.FirstName,
            LastName: userDataRegister.LastName,
            Phone: userDataRegister.Phone,
            Prefix: userDataRegister.Prefix,
            Affiliate: userDataRegister.Affiliate,
            AllowSendMail: userDataRegister.AllowSendMail,
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

    postPickUpPoints(PickUpPoints: ClosestPickUpPoints){
        const body = {
            City: PickUpPoints.City,
            Street: PickUpPoints.Street,
            Building: PickUpPoints.Building,
        };
        return this.http.post(this.baseUrl + "Public/ClosestPickUpPoints", body); 
    }

	
}
