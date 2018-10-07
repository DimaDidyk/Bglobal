import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm, FormControl, FormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SearchAddressPipe } from '../search-address.pipe';
import { GooglePlaceModule,GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { toggleHeight } from '../animation';
import { Observable } from 'rxjs';

import { HttpService } from '../services/http.service';
import { ClosestPickUpPoints } from "../entity/country";
import { Delivery } from "../entity/Delivery";
import { HeaderComponent } from "../header/header.component";

// import { TotalComponent } from '../total/total.component';
// private totalComponent: TotalComponent,

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.component.html',
    animations: [
        toggleHeight
    ],
    styleUrls: ['./delivery.component.scss']
})

export class DeliveryComponent implements OnInit {

    constructor( 
        private httpService: HttpService,
        private headerComponent: HeaderComponent,
     ){}

    @Input() clientInfoFormData: string;

   
    // getConfigDelivery
    getSlidePackgeData = JSON.parse(localStorage.getItem('packageData'));
    deliveryPrice:number = 0;
    deliveryId:number = 22;

    public delivery:Delivery = new Delivery();
    getConfigDelivery(delivery): Observable<Delivery[]> {
        return this.httpService.getDeliveryPrice(delivery);
    }

    // show animation
    isShow = 'hide';
    onSubmit(deliveryForm: NgForm) {
        this.isShow = 'show';

        // Delivery obj
        this.delivery.packageId = this.getSlidePackgeData.Id;
        this.delivery.deliveryId = deliveryForm.value.choice;
        // send getConfigDelivery
        this.getConfigDelivery( this.delivery ).subscribe( 
            data => this.deliveryPrice = Number(data) 
        );

        this.checkLogin();
    }
    
    checked1TooltipContent = "checked1TooltipContent is an anti-fraud security feature to help verify that you are in possession of your credit card. On most credit cards (including Visa and Mastercard), the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. On American Express credit cards, the four-digit CVV number is printed on the front of the card above the card’s account number.";
    checked2TooltipContent = "checked2TooltipContent is an anti-fraud security feature to help verify that you are in possession of your credit card. On most credit cards (including Visa and Mastercard), the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. On American Express credit cards, the four-digit CVV number is printed on the front of the card above the card’s account number.";

    // scroll animate
    scrollAnimate(element) {
        setTimeout(function(){
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250)
    }

    // locality
    // route
    // street_number
    closestPickUpPoints:ClosestPickUpPoints = new ClosestPickUpPoints();
    options = {
        componentRestrictions: { country: "il" }
    };
    addresses;
    emptyAddresses:boolean = true;
    errorLocality;
    @ViewChild("placesRef")placesRef : GooglePlaceDirective;
    public handleAddressChange(address) {
        // console.log( address );
        this.errorLocality = '';
        let locality = false;
        let route = false;
        let street_number = false;
        for (var i = address.address_components.length - 1; i >= 0; i--) {
            // console.log( address.address_components[i].long_name );
            
            if( address.address_components[i].types[0] == 'locality' ){
                locality = true;
                this.closestPickUpPoints.City = address.address_components[i].long_name;
            }
            if( address.address_components[i].types[0] == 'route' ){
                route = true;
                this.closestPickUpPoints.Street = address.address_components[i].long_name;
            }
            if( address.address_components[i].types[0] == 'street_number' ){
                street_number = true;
                this.closestPickUpPoints.Building = address.address_components[i].long_name;
            }
            // console.log( locality, route, street_number );
            // console.log( locality, route, );
        }
        if( !locality ) this.errorLocality += 'Введите название города\n';
        if( !route ) this.errorLocality += 'Введите название улицы\n';
        if( !street_number ) this.closestPickUpPoints.Building = 'empty';


        if( locality && route && this.errorLocality == '' ){
            console.log( 'send query' );
            this.httpService.postPickUpPoints(this.closestPickUpPoints)
            .subscribe(
                error => {
                    console.log(error);
                    this.addresses = error;
                    // this.emptyAddresses ==
                    if( this.addresses.length == 0 ){
                        this.emptyAddresses = false;
                    }else{
                        this.emptyAddresses = true;
                    }
                },
                complete => console.log(complete),
            );
        }
        // console.log( this.closestPickUpPoints );
        // console.log( this.errorLocality );
    }

    // check login
    public checkLogin(){
        let tokenAuthorization = localStorage.getItem('tokenAuthorization');
        if( tokenAuthorization == undefined || tokenAuthorization == null ){
            this.headerComponent.openDialog();
        }
    }

   

    ngOnInit() {}
}
