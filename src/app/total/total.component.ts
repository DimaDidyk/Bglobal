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


	// parse storage data (form)
	flyFormStor = JSON.parse( localStorage.getItem( 'flyFormValue' ) );

	couponName = '';
	showInput = 'hide';
	onSubmit(totalForm: NgForm) {
		this.couponName = totalForm.value.coupon;
		totalForm.value.coupon = '';
		// this.showInput = 'hide';
	}
	// show Input Coupon
	showInputCoupon(){
		this.showInput = "show";
	}

	activeCoupon:string = "test";
	errorCoupon:string = null;
	isActiveCoupon:boolean = false;
	sendCoupon(coupon:string){
		if( this.activeCoupon === coupon){
			this.isActiveCoupon = true;
			this.errorCoupon = null;

		}else{
			this.errorCoupon = "invalid coupon";
		}
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
