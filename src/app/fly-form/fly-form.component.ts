import { Component, OnInit, Input } from '@angular/core';

import { NgForm, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

import { PromotionComponent } from '../promotion/promotion.component';
import { OffersComponent } from '../offers/offers.component';
import { toggleHeight } from '../animation';


@Component({
	selector: 'app-fly-form',
	templateUrl: './fly-form.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./fly-form.component.scss']
})

export class FlyFormComponent implements OnInit {

	// select list
	countries = [
		{country: 'Israil'},
		{country: 'America'},
		{country: 'Canada'},
		{country: 'Israil'},
		{country: 'America'},
		{country: 'Canada'},
		{country: 'Israil'},
		{country: 'America'},
		{country: 'Canada'},
		{country: 'Israil'},
		{country: 'America'},
		{country: 'Canada'},
	];

	// min date validation
	minDate = new Date(); //today
	daydiff(first, second) {
	    return Math.round((second-first)/(1000*60*60*24));
	}

	// geyObject
	getObjectValue(formObject:object, valueObject:string){
		return formObject[valueObject];
	}

	// add new date inputs
	DateId = [
		{ nameDate1: "dateLanding", nameDate2: "dateAppearance"},
	];

	index = -1;
	addDateInputs(newInputs) {
		if( this.index < 3 ){
			newInputs = [
				{ nameDate1: "dateLanding2", nameDate2: "dateAppearance2"},
				{ nameDate1: "dateLanding3", nameDate2: "dateAppearance3"},
				{ nameDate1: "dateLanding4", nameDate2: "dateAppearance4"},
				{ nameDate1: "dateLanding5", nameDate2: "dateAppearance5"},
			];
			this.index = this.index + 1;
		    if (newInputs) {
		  		this.DateId.push( newInputs[this.index] );
			}
		}
	}

	// scroll animate
	scrollAnimate(element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	}


	// animate show and hide
	isShow = 'hide';
	isHide = 'show';
	onSubmit(flyForm: NgForm) {
		this.isShow = 'show';
		this.isHide = 'hide';
	}

	constructor() { 
	}

	ngOnInit() {
	}

}
