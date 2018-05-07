import { Component, OnInit, Input } from '@angular/core';

import { NgForm, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

import { PromotionComponent } from '../promotion/promotion.component';
import { OffersComponent } from '../offers/offers.component';


@Component({
	selector: 'app-fly-form',
	templateUrl: './fly-form.component.html',
	styleUrls: ['./fly-form.component.scss']
})

export class FlyFormComponent implements OnInit {
	countries = [
		{country: 'Israil'},
		{country: 'America'},
		{country: 'Canada'},
	];

	minDate = new Date(); //today
	daydiff(first, second) {
	    return Math.round((second-first)/(1000*60*60*24));
	}
	
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

	getObjectValue(formObject:object, valueObject:string){
		return formObject[valueObject];
	}

	onSubmit(flyForm: NgForm) {
		console.log('test');
	}

	constructor() { 
		
	}

	ngOnInit() {

	}

}
