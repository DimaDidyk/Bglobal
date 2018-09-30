import { Component, OnInit, Input, Inject, Injectable, ViewChild, ElementRef } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toggleHeight } from '../animation';

import { Coupon } from "../entity/Coupon";
import { HttpService } from '../services/http.service';


@Component({
	selector: 'app-total',
	templateUrl: './total.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./total.component.scss']
})

export class TotalComponent implements OnInit {

	constructor( private httpService: HttpService ){}

	@Input() additionallyFromData;
	@Input() deliveryFormData;


	// parse storage data (form)
	flyFormStor = JSON.parse( localStorage.getItem( 'flyFormValue' ) );
	getSlidePackgeData = JSON.parse(localStorage.getItem('packageData'));
	deliveryPrice:number = 17;
	totalPrice:number;

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

  	coupon:Coupon = new Coupon();
	sendCoupon(coupon:string){
		// data to send
	    this.coupon.Code = 'M30000';
        console.log( this.coupon );
	    
	    this.httpService.postDataCoupon(this.coupon).subscribe(
	      (data) => {
	        // console.log( this.coupon );
	        console.log( data );
	      },
	    );

		// if( this.activeCoupon === coupon){
		// 	this.isActiveCoupon = true;
		// 	this.errorCoupon = null;

		// }else{
		// 	this.errorCoupon = "invalid coupon";
		// }
	}

	// scroll animate
	isShow = 'hide';
	scrollAnimate(element) {
		this.isShow = 'show';
		setTimeout(function(){
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 250)
	}
	
   

	calculateTotalPrice(deliveryFormDataChoice){
		this.totalPrice = 0;
		this.totalPrice += this.getSlidePackgeData['PackagePrice'];
		this.totalPrice += this.getSlidePackgeData['SimPrice'];
		if( deliveryFormDataChoice == false ){
			this.totalPrice += this.deliveryPrice;
		}
		return this.totalPrice;
	}

	ngOnInit() {
		

	}
}
