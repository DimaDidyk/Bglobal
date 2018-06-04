import { Component, OnInit, Input, Inject } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toggleHeight } from '../animation';

@Component({
	selector: 'app-total',
	templateUrl: './total.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./total.component.scss']
})

export class TotalComponent implements OnInit {

	@Input() additionallyFromData: string;
	@Input() deliveryFormData: string;

	// show animation
	onSubmit(totalForm: NgForm) {
	}
	
	showInput = 'hide';
	showInputCoupon(){
		this.showInput = "show";
	}

	activeCoupon:string = "test";
	errorCoupon:string = null;
	isActiveCoupon:boolean = false;
	sendCoupon(coupon:string){
		console.log( coupon );
		if( this.activeCoupon === coupon){
			this.isActiveCoupon = true;
			this.errorCoupon = null;

		}else{
			this.errorCoupon = "invalid coupon";

		}
		console.log( this.errorCoupon );

	}

	// scroll animate
	isShow = 'hide';
	scrollAnimate(element) {
		this.isShow = 'show';
		setTimeout(function(){
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 250)
	}
	
	constructor() { }

	ngOnInit() {
	}
}
