import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Country, SimCountriesWithCategory, ClosestPickUpPoints } from "../entity/Country";
import { SimPackages } from "../entity/Package";
import { UserDataLead, UserDataRegister, UserDataLogin } from "../entity/User";
import { Coupon } from "../entity/Coupon";
import { Delivery } from "../entity/Delivery";
import { BuyPackageData } from "../entity/Payment";

const tokenAuthorization = localStorage.getItem('tokenAuthorization');
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': "Bearer " + tokenAuthorization,
    }),
    params: {},
};

@Injectable()
export class HttpService {

	baseUrl: string = "https://api.bglobal.global/api/";

	constructor(private http: HttpClient) {}

    /*
    * GET
    */
    // get countries 
	getCountries() : Observable<Country[]> {
		return this.http.get<Country[]>(this.baseUrl + "Public/SimCountries", httpOptions);
	}

    // get countries wgith vategory
	getSimCountriesWithCategory() : Observable<SimCountriesWithCategory[]> {
		return this.http.get<SimCountriesWithCategory[]>(this.baseUrl + "Public/SimCountriesWithCategory", httpOptions);
	}

    // check coupone
    getDataCoupon(coupon: Coupon) : Observable<Coupon[]> {
        httpOptions.params = coupon;
        return this.http.get<Coupon[]>(this.baseUrl + "Payment/GetCouponValue" , httpOptions);
    }

    // get delivery price
    getDeliveryPrice(delivery: Delivery) : Observable<Delivery[]> {
        httpOptions.params = delivery;
        return this.http.get<Delivery[]>(this.baseUrl + "Public/DeliveryPrice" , httpOptions);
    }

    /*
    * POST
    */
    // create lead
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

    // Payment
    postDataBuyPackage(buyPackageData: BuyPackageData){
        httpOptions.params = null;
        return this.http.post(this.baseUrl + "Payment/BuyPackage", buyPackageData, httpOptions); 
    }

    // login
    postDataLogin(userDataLogin: UserDataLogin){
        // const body = {
        //     Email: userDataLogin.Email,
        //     Password: userDataLogin.Password,
        // };
        return this.http.post(this.baseUrl + "Account/Login", userDataLogin); 
    }

    // register
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

    // get data packages by counties
    postDataSimPackages(SimPackages: SimPackages){
        const body = {
            Countries: SimPackages.Countries,
            TotalDays: SimPackages.TotalDays,
        };
        return this.http.post(this.baseUrl + "Public/SimPackagesByCountries", body); 
    }

    // get points for delivery
    postPickUpPoints(PickUpPoints: ClosestPickUpPoints){
        const body = {
            City: PickUpPoints.City,
            Street: PickUpPoints.Street,
            Building: PickUpPoints.Building,
        };
        return this.http.post(this.baseUrl + "Public/ClosestPickUpPoints", body); 
    }

    public checkLogin(){
        let tokenAuthorization = localStorage.getItem('tokenAuthorization');
        if( tokenAuthorization == undefined || tokenAuthorization == null ){
            return 0;
        }
        return 1;
    }
	
}
