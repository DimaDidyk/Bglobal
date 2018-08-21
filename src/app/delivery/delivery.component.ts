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

@Component({
	selector: 'app-delivery',
	templateUrl: './delivery.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./delivery.component.scss']
})

export class DeliveryComponent implements OnInit {

	@Input() clientInfoFormData: string;

	// show animation
	isShow = 'hide';
	onSubmit(clientInfoForm: NgForm) {
		this.isShow = 'show';
	}
	
	checked1TooltipContent = "checked1TooltipContent is an anti-fraud security feature to help verify that you are in possession of your credit card. On most credit cards (including Visa and Mastercard), the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. On American Express credit cards, the four-digit CVV number is printed on the front of the card above the card’s account number.";
	checked2TooltipContent = "checked2TooltipContent is an anti-fraud security feature to help verify that you are in possession of your credit card. On most credit cards (including Visa and Mastercard), the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. On American Express credit cards, the four-digit CVV number is printed on the front of the card above the card’s account number.";

	// scroll animate
	scrollAnimate(element) {
		setTimeout(function(){
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 250)
	}

	checked = true;
	// test:string = 'test';
	// addresses = [
	// 	'demo',
	// 	'test',
	// 	'test 1',
	// 	'test 11',
	// 	'test 111',
	// 	'test 2',
	// 	'test 3',
	// 	'test 4',
	// 	'test 5',
	// 	'test 6',
	// 	'test 7',
	// 	'test 8',
	// 	'תובת כשלהי, עיר  ',
	// 	'תובת כשלהי, עיר  ',
	// 	'תובת כשלהי, עיר  ',
	// 	'תובת כשלהי, עיר  ',
	// ]

	// locality
	// route
	// street_number
	options = {
		componentRestrictions: { country: "il" }
    };
    errorLocality;
    @ViewChild("placesRef")placesRef : GooglePlaceDirective;
    public handleAddressChange(address) {
        console.log( address );

        this.errorLocality = '';

        let locality = false;
    	let route = false
    	let street_number = false;
        for (var i = address.address_components.length - 1; i >= 0; i--) {
        	address.address_components[i];
        	console.log( address.address_components[i].types[0] );
        	
        	if( address.address_components[i].types[0] == 'locality' )
        		locality = true;
        	if( address.address_components[i].types[0] == 'route' )
        		route = true;
        	if( address.address_components[i].types[0] == 'street_number' )
        		street_number = true;
        	console.log( locality, route, street_number );
        }
        if( !locality ) this.errorLocality += 'Введите название города\n';
        if( !route ) this.errorLocality += 'Введите название улицы\n';
        if( !street_number ) this.errorLocality += 'Введите номер дома';
        console.log( this.errorLocality );
    }


	constructor() { }

	ngOnInit() {

		
	}

	

}
