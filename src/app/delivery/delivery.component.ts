
import { Component, OnInit, Input, Inject, Injectable, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm, FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SearchAddressPipe } from '../search-address.pipe';
import { GooglePlaceModule, GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { toggleOpacity } from '../animation';
import { Observable } from 'rxjs';

import { HttpService } from '../services/http.service';
import { ClosestPickUpPoints } from "../entity/country";
import { Delivery, DeliveryRequest } from "../entity/Delivery";
import { PickUpPoint } from '../entity/PickUpPoint';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';
import { } from '../../assets/html';

// import { TotalComponent } from "../total/total.component";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  animations: [
    toggleOpacity
  ],
  styleUrls: ['./delivery.component.scss']
})

export class DeliveryComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private headerComponent: HeaderComponent,
    private http: HttpClient
    // private totalComponent: TotalComponent,
  ) {
    this.http.get('../../assets/html/delivery.json').subscribe(data => {
      console.log(data);
    });
  }

  @Input()
  clientInfoFormData: string;


  // getConfigDelivery
  getSlidePackgeData = JSON.parse(localStorage.getItem('packageData'));
  deliveryPrice = 0;
  pickUp = '';
  dataReceived = true;
  //deliveryId = 22;

  public delivery: Delivery = {
    packageId: this.getSlidePackgeData.Id,
    deliveryId: 22
  };

  getDeliveryPrice(delivery): Observable<Delivery[]> {
    return this.httpService.getDeliveryPrice(delivery);
  }

  // request for payment
  public deliveryRequest: DeliveryRequest = new DeliveryRequest();

  // show animation
  isShow = 'hide';
  isShowCurrent = 'show';
  onSubmit(deliveryForm: NgForm) {
    //console.log("Form submitted");
    //console.log("Form valid: " + deliveryForm.valid);
    if (!deliveryForm.valid) return;

    console.log(deliveryForm);

    // Delivery obj
    //this.delivery.packageId = this.getSlidePackgeData.Id;
    //this.delivery.deliveryId = deliveryForm.value.choice;

    console.log(this.delivery);
    // send getConfigDelivery
    this.getDeliveryPrice(this.delivery).subscribe(
      data => {
        console.log("Delivery data recived");
        console.log(data);
        this.isShow = 'show';
        this.isShowCurrent = 'hide';
        // this.totalComponent.isShowCurrent = 'show';
        this.deliveryPrice = Number(data);
        this.deliveryRequest.Id = this.delivery.deliveryId;
        //this.deliveryRequest.PickUpPoint = deliveryForm.value.address;
        console.log(this.deliveryRequest);
      },
    );
    // this.checkLogin();
  }

  checked1TooltipContent = "checked1TooltipContent is an anti-fraud security feature to help verify that you are in possession of your credit card. On most credit cards (including Visa and Mastercard), the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. On American Express credit cards, the four-digit CVV number is printed on the front of the card above the card’s account number.";
  checked2TooltipContent = "checked2TooltipContent is an anti-fraud security feature to help verify that you are in possession of your credit card. On most credit cards (including Visa and Mastercard), the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. On American Express credit cards, the four-digit CVV number is printed on the front of the card above the card’s account number.";

  // scroll animate
  scrollAnimate(element) {
    setTimeout(function () {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250)
  }

  // locality
  // route
  // street_number
  closestPickUpPoints: ClosestPickUpPoints = new ClosestPickUpPoints();
  options = {
    componentRestrictions: { country: "il" }
  };
  addresses;
  emptyAddresses: boolean = true;
  errorLocality;
  @ViewChild("placesRef")
  placesRef: GooglePlaceDirective;

  public handleAddressChange(address) {
    this.dataReceived = false;
    console.log(address);
    this.errorLocality = '';
    let locality = false;
    let route = false;
    let street_number = false;
    for (var i = address.address_components.length - 1; i >= 0; i--) {
      // console.log( address.address_components[i].long_name );

      if (address.address_components[i].types[0] == 'locality') {
        locality = true;
        this.closestPickUpPoints.City = address.address_components[i].long_name;
      }
      if (address.address_components[i].types[0] == 'route') {
        route = true;
        this.closestPickUpPoints.Street = address.address_components[i].long_name;
      }
      if (address.address_components[i].types[0] == 'street_number') {
        street_number = true;
        this.closestPickUpPoints.Building = address.address_components[i].long_name;
      }
      // console.log( locality, route, street_number );
      // console.log( locality, route, );
    }
    if (!locality) this.errorLocality += 'הזן שם עיר \n';
    if (!route) this.errorLocality += ' הזן שם רחוב  \n';
    if (!street_number) this.closestPickUpPoints.Building = 'empty';


    if (locality && route && this.errorLocality == '') {
      console.log('send query');
      this.httpService.postPickUpPoints(this.closestPickUpPoints)
        .subscribe(
          (data) => {
            console.log("PickUp points received:");
            console.log(data);
            this.addresses = data;
            if (this.addresses.length == 0) {
              this.emptyAddresses = false;
            } else {
              this.emptyAddresses = true;
            }
          },
          error => {
            //console.log("Error: %s", JSON.stringify(error));
          },
          () => {
            //console.log("Completed")
          }
      );
      this.dataReceived = true;
    }
    // console.log( this.closestPickUpPoints );
    // console.log( this.errorLocality );
  }

  // check login
  public checkLogin() {
    let tokenAuthorization = localStorage.getItem('tokenAuthorization');
    if (tokenAuthorization == undefined || tokenAuthorization == null) {
      this.headerComponent.openDialogLogIn();
    }
  }

  ngOnInit() {
  }
}
