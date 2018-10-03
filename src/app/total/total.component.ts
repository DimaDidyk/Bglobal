import { Component, OnInit, Input, Inject, Injectable, ViewChild, ElementRef } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toggleHeight } from '../animation';
import { Observable } from 'rxjs';

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
	@Input() deliveryPrice;

	// parse storage data (form)
	flyFormStor = JSON.parse( localStorage.getItem( 'flyFormValue' ) );
	getSlidePackgeData = JSON.parse(localStorage.getItem('packageData'));
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

	// check coupon
  	public coupon:Coupon = new Coupon();
	getConfigCoupone(coupon): Observable<Coupon[]> {
	    return this.httpService.getDataCoupon(coupon);
	}
	sendCoupon(coupon:string){
		// data to send
	    this.coupon.Code = 'M30000';
        this.getConfigCoupone(this.coupon).subscribe(data => this.coupon);
        console.log( this.coupon );

		// if( this.activeCoupon === coupon){
		// 	this.isActiveCoupon = true;
		// 	this.errorCoupon = null;
		// }else{
		// 	this.errorCoupon = "invalid coupon";
		// }
	}

	// calculate total price
  	
	calculateTotalPrice(deliveryFormDataChoice){
		this.totalPrice = 0;
		this.totalPrice += this.getSlidePackgeData['PackagePrice'];
		this.totalPrice += this.getSlidePackgeData['SimPrice'];
		this.totalPrice += this.deliveryPrice;
		return this.totalPrice;
	}

	// scroll animate
	isShow = 'hide';
	scrollAnimate(element) {
		this.isShow = 'show';
		setTimeout(function(){
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 250)
	}

	ngOnInit() {}
}
