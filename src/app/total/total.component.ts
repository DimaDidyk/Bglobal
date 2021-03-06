import { Component, OnInit, Input, Inject, Injectable, ViewChild, ElementRef } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toggleOpacity } from '../animation';
import { Observable } from 'rxjs';

import { Coupon } from "../entity/Coupon";
import { HttpService } from '../services/http.service';
import { DeliveryComponent } from "../delivery/delivery.component";
import { DeliveryRequest } from '../entity/Delivery';


@Component({
	selector: 'app-total',
	templateUrl: './total.component.html',
	animations: [
		toggleOpacity
	],
	styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

	constructor( 
		private httpService: HttpService,
		private deliveryComponent: DeliveryComponent,
	){}

	@Input() additionallyFromData;
	@Input() deliveryPrice;
  @Input() deliveryRequest: DeliveryRequest;

	// parse storage data (form)
	flyFormStor = JSON.parse( localStorage.getItem( 'flyFormValue' ) );
	getSlidePackgeData = JSON.parse(localStorage.getItem('packageData'));
	totalPrice:number;
	couponeSale;
	errorCoupon:string = null;
	isActiveCoupon:boolean = false;
	showInput = 'hide';
	// couponeName:string = '';

	// check coupone
  	public coupon:Coupon = new Coupon();
	onSubmit(couponeForm: NgForm) {
		// check coupon
		this.coupon.Code = couponeForm.value.coupon; //'M30000'
        this.httpService.getDataCoupon(this.coupon).subscribe(
        	data => {
	        	this.couponeSale = data;
	        	this.couponeSale = Number(this.couponeSale.Value);
				if( this.couponeSale > 0 ){
					this.isActiveCoupon = true;
					this.errorCoupon = null;
				}else{
					this.errorCoupon = "קופון שגוי";
       	 			couponeForm.value.coupon = '';
				}
       	 	},
       	 	error => {
       	 		couponeForm.value.coupon = '';
       	 	}
        );
	}

	// show Input Coupon
	showInputCoupon(){
		this.showInput = "show";
	}

	// calculate total price
	calculateTotalPrice(){
		this.totalPrice = 0;
		this.totalPrice = Math.ceil((this.flyFormStor.countDays / this.getSlidePackgeData['DaysExpired'])) * this.getSlidePackgeData['PackagePrice'];
		this.totalPrice += this.getSlidePackgeData['SimPrice'];
		this.totalPrice += this.deliveryPrice;
		if( this.couponeSale > 0 ){
			this.totalPrice = this.totalPrice - this.couponeSale;
		}
		this.totalPrice = Math.ceil(this.totalPrice);
		return this.totalPrice;
	}

	// scroll animate
	isShow = 'hide';
	isShowCurrent = 'show';
	showDelivery(){
		this.deliveryComponent.isShowCurrent = 'show';
		this.deliveryComponent.isShow = 'hide';
	}
	scrollAnimate(element) {
		this.isShow = 'show';
		setTimeout(function(){
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 250)
	}

  ngOnInit() {
  }
}
