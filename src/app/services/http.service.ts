import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Country, SimCountriesWithCategory, ClosestPickUpPoints } from "../entity/Country";
import { SimPackages } from "../entity/Package";
import { UserDataLead, UserDataRegister, UserDataLogin } from "../entity/User";
import { Coupon } from "../entity/Coupon";
import { Delivery } from "../entity/Delivery";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': "Bearer i7XJdi9k5odDrUijzkIAlVSgq6EPA7HyZ88Na5kFyJe5okWHr5bvuwxu2q_VZ4Qmw8aTPyd66OW5lrt6oIFoVdXkzW-mijmyuZJ9U2CQypFzwStkbEPJ0y2YIEFUIKoggurr_V53bffaGxGirlqsxtNoxn-W6o2leRYmc7-rHCijYT04OBt9bPEMChw9ToXh8y-bSU5nLiNXnWN8Rd9N0_G3joQ4GOcpKH5n2B0YRk3tQn_Jh73N3x6d4Wcnhg3gTZci9oPoKqy3frU9UKA7Vq0Mo0NHHLLpEMhMKzpRYbZ9hMri",
    }),

    params: {},
};

@Injectable()
export class HttpService {

	baseUrl: string = "https://api.bglobal.global/api/";

	constructor(private http: HttpClient) {}

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

    // login
    // postDataLogin(userDataLogin: UserDataLogin){
    //     httpOptions.params = userDataLogin;
    //     return this.http.post<UserDataLogin[]>(this.baseUrl + "Account/Login", httpOptions); 
    // }
    postDataLogin(userDataLogin: UserDataLogin){
        const body = {
            Email: userDataLogin.Email,
            Password: userDataLogin.Password,
        };
        return this.http.post(this.baseUrl + "Account/Login", body); 
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

	
}
