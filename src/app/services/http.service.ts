import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Country, SimCountriesWithCategory, ClosestPickUpPoints } from "../entity/Country";
import { SimPackages } from "../entity/Package";
import { UserDataLead, UserDataRegister, UserDataLogin, UserInfo } from "../entity/User";
import { Coupon } from "../entity/Coupon";
import { Delivery } from "../entity/Delivery";
import { BuyPackageData } from "../entity/Payment";


var tokenAuthorization = '';
if( localStorage.getItem('tokenAuthorization') ){
    var tokenAuthorizationJson = JSON.parse(localStorage.getItem('tokenAuthorization'));
    // time
    var nowTime = new Date();
    var expiresDateToken = new Date(tokenAuthorizationJson.expires);
    if( nowTime > expiresDateToken ){
        console.log( 'remove Token' );
        localStorage.removeItem('tokenAuthorization');
    }else{
        console.log( 'true Token' );
    }

    if( tokenAuthorizationJson.access_token || tokenAuthorizationJson.token_type){
        var tokenAuthorization = tokenAuthorizationJson.token_type+" "+ tokenAuthorizationJson.access_token;
    }else{
        localStorage.removeItem('tokenAuthorization');
    }
}else{
    localStorage.removeItem('tokenAuthorization');
    tokenAuthorization = '';
}
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': tokenAuthorization,
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
    // get user information
    getUserInfo(): Observable<UserInfo[]> {
        return this.http.get<UserInfo[]>(this.baseUrl + "Account/UserInfo" , httpOptions);
    }

    /*
    * POST
    */
    // create SALE lead
    postDataCreateSaleLead(userDataLead: UserDataLead){
        return this.http.post(this.baseUrl + "Leads/CreateSaleLead", userDataLead); 
    }
    // create SERVIClEead
    postDataCreateServiceLead(userDataLead: UserDataLead){
        return this.http.post(this.baseUrl + "Leads/CreateServiceLead", userDataLead); 
    }

    // Payment
    postDataBuyPackage(buyPackageData: BuyPackageData){
        httpOptions.params = null;
        return this.http.post(this.baseUrl + "Payment/BuyPackage", buyPackageData, httpOptions); 
    }

    // login
    postDataLogin(userDataLogin: UserDataLogin){
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
